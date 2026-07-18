type RateLimitEntry = {
  count: number;
  resetAt: number;
};

type RateLimitResult = {
  allowed: boolean;
  retryAfterSeconds: number;
};

const globalRateLimitStore =
  globalThis as typeof globalThis & {
    __kafaContactRateLimitStore?: Map<
      string,
      RateLimitEntry
    >;
  };

const rateLimitStore =
  globalRateLimitStore
    .__kafaContactRateLimitStore ??
  new Map<string, RateLimitEntry>();

globalRateLimitStore.__kafaContactRateLimitStore =
  rateLimitStore;

export function checkRateLimit(
  key: string,
  limit = 5,
  windowMs = 10 * 60 * 1000,
): RateLimitResult {
  const now = Date.now();

  if (rateLimitStore.size > 1000) {
    for (
      const [entryKey, entry]
      of rateLimitStore.entries()
    ) {
      if (entry.resetAt <= now) {
        rateLimitStore.delete(entryKey);
      }
    }
  }

  const currentEntry =
    rateLimitStore.get(key);

  if (
    !currentEntry ||
    currentEntry.resetAt <= now
  ) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + windowMs,
    });

    return {
      allowed: true,
      retryAfterSeconds: 0,
    };
  }

  if (currentEntry.count >= limit) {
    return {
      allowed: false,
      retryAfterSeconds: Math.ceil(
        (currentEntry.resetAt - now) /
          1000,
      ),
    };
  }

  currentEntry.count += 1;

  rateLimitStore.set(
    key,
    currentEntry,
  );

  return {
    allowed: true,
    retryAfterSeconds: 0,
  };
}