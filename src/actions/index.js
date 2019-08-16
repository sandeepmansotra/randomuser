export const BANK_BRANCH = "BANK_BRANCH";

export function bankBranch(branches) {
  return {
    type: BANK_BRANCH,
    branches
  };
}
