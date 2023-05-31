const { deterministicPartitionKey } = require("./dpk");
const crypto = require("crypto");

describe("deterministicPartitionKey", () => {
  let event;
  let candidate;
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  beforeEach(() => {
    event = {
      partitionKey: "My key"
    };
    candidate = null;
  });

  it("should return the provided partition key if one exists", () => {
    candidate = crypto.deterministicPartitionKey(event);
    expect(candidate).toBe("My key");
  });

  it("should return a SHA3-512 of the data if no partition key exists", () => {
    event.partitionKey = null;
    candidate = crypto.deterministicPartitionKey(event);
    expect(candidate.length).toBe(128);
  });

  it("should return a SHA3-512 if the partition key is too long", () => {
    event.partitionKey = "This key's length is greater than the maximum!";
    candidate = crypto.deterministicPartitionKey(event);
    expect(candidate.length).toBe(128);
  });
});
