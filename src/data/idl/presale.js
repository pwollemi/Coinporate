export const Presale = {
  address: "Fz2uso7i2r3oMESUMfmC7wBa2gfzz7me4DZfXSrKqycp",
  metadata: {
    name: "presale",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "deposit",
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "fundMint",
        },
        {
          name: "rewardMint",
        },
        {
          name: "depositorFundTokenAccount",
          writable: true,
        },
        {
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "recipientInfo",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "rewardMint",
              },
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "const",
                value: [
                  114, 101, 99, 105, 112, 105, 101, 110, 116, 45, 105, 110, 102,
                  111, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
          writable: true,
        },
        {
          name: "vestingInfo",
          writable: true,
        },
        {
          name: "vestingProgram",
          address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "systemProgram",
          address: "11111111111111111111111111111111",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vestingAccountBump",
          type: "u8",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "initPresale",
      discriminator: [172, 248, 47, 226, 223, 52, 94, 217],
      accounts: [
        {
          name: "initializer",
          writable: true,
          signer: true,
        },
        {
          name: "fundMint",
        },
        {
          name: "rewardMint",
        },
        {
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "rewardMint",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "rewardMint",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
        },
        {
          name: "vestingProgram",
          address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "systemProgram",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: {
              name: "presaleParams",
            },
          },
        },
      ],
    },
    {
      name: "pausePresaleByEmergency",
      discriminator: [132, 148, 234, 44, 101, 141, 254, 84],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "resumePresale",
      discriminator: [34, 45, 30, 147, 226, 254, 42, 152],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "setPresalePeriod",
      discriminator: [219, 2, 32, 67, 188, 156, 20, 175],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
        {
          name: "newPeriod",
          type: "i64",
        },
      ],
    },
    {
      name: "setStartTime",
      discriminator: [29, 37, 96, 184, 63, 48, 45, 224],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
        {
          name: "newStartTime",
          type: "i64",
        },
      ],
    },
    {
      name: "setVestingTime",
      discriminator: [68, 99, 150, 24, 119, 189, 161, 184],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
          writable: true,
        },
        {
          name: "vestingProgram",
          address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
        {
          name: "vestingAccountBump",
          type: "u8",
        },
        {
          name: "newStartTime",
          type: "u64",
        },
      ],
    },
    {
      name: "startPresale",
      discriminator: [57, 19, 73, 191, 195, 254, 45, 223],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "updateAuthority",
      discriminator: [32, 46, 64, 28, 149, 75, 243, 88],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "newAuthority",
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "withdrawFunds",
      discriminator: [241, 36, 29, 111, 208, 31, 104, 217],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "projectOwnerFundTokenAccount",
          writable: true,
        },
        {
          name: "treasuryFundTokenAccount",
          writable: true,
        },
        {
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vaultAccountBump",
          type: "u8",
        },
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "withdrawRewardTokens",
      discriminator: [236, 207, 121, 201, 129, 101, 234, 69],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "receiveTokenAccount",
          writable: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingVault",
          writable: true,
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "withdrawUnsoldToken",
      discriminator: [225, 31, 78, 70, 179, 149, 96, 22],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "projectOwnerRewardTokenAccount",
          writable: true,
        },
        {
          name: "presaleAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "presaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingVault",
          writable: true,
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presaleAccountBump",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "presaleAccount",
      discriminator: [199, 34, 38, 30, 209, 182, 217, 206],
    },
    {
      name: "recipientInfo",
      discriminator: [104, 48, 112, 95, 190, 50, 219, 214],
    },
    {
      name: "vestingAccount",
      discriminator: [102, 73, 10, 233, 200, 188, 228, 216],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "vestingTokenNotEnough",
      msg: "Not enough amount deposited into vesting",
    },
    {
      code: 6001,
      name: "notPassedKyc",
      msg: "Not passed KYC",
    },
    {
      code: 6002,
      name: "exceedAllocation",
      msg: "Cannot exceed allocation",
    },
    {
      code: 6003,
      name: "notExtendedPeriod",
      msg: "Not extended period",
    },
  ],
  types: [
    {
      name: "presaleAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: ["Owner address(presale)"],
            type: "pubkey",
          },
          {
            name: "fundToken",
            docs: ["Fund token"],
            type: "pubkey",
          },
          {
            name: "rewardToken",
            docs: ["Reward token(from the project)"],
            type: "pubkey",
          },
          {
            name: "projectOwner",
            docs: ["Owner of this project"],
            type: "pubkey",
          },
          {
            name: "vestingProgram",
            docs: ["Presale Vesting Program"],
            type: "pubkey",
          },
          {
            name: "vestingAccount",
            docs: ["Account that has all vesting information"],
            type: "pubkey",
          },
          {
            name: "exchangeRate",
            docs: ["Exchange rate between the Fund token and Reward token"],
            type: "u64",
          },
          {
            name: "startTime",
            docs: ["Timestamp when presale starts"],
            type: "i64",
          },
          {
            name: "period",
            docs: ["Presale period"],
            type: "i64",
          },
          {
            name: "serviceFee",
            docs: ["Service Fee : if `ACCURACY` is 1e6(default), 1e9 is 10%"],
            type: "u64",
          },
          {
            name: "initialRewardsAmount",
            docs: ["Initial Deposited rewardToken amount"],
            type: "u64",
          },
          {
            name: "isPresalePaused",
            docs: ["Presale pause status"],
            type: "bool",
          },
          {
            name: "unsoldTokenWithdrawn",
            docs: ["If unsold reward token is withdrawn, set to true"],
            type: "bool",
          },
          {
            name: "currentPresalePeriod",
            docs: ["Remaining presale time when paused"],
            type: "i64",
          },
          {
            name: "publicSoldAmount",
            docs: [
              "Reward token amount sold by Public Sale (init with default value)",
            ],
            type: "u64",
          },
          {
            name: "totalParticipants",
            docs: ["Total participants of the presale"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "presaleParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "projectOwner",
            docs: ["Owner of this project"],
            type: "pubkey",
          },
          {
            name: "rate",
            docs: ["Exchange rate between the Fund token and Reward token"],
            type: "u64",
          },
          {
            name: "startTime",
            docs: ["Timestamp when presale starts"],
            type: "i64",
          },
          {
            name: "period",
            docs: ["Presale period"],
            type: "i64",
          },
          {
            name: "serviceFee",
            docs: ["Service Fee : if `ACCURACY` is 1e6(default), 1e5 is 10%"],
            type: "u64",
          },
          {
            name: "initialRewardsAmount",
            docs: ["Initial Deposited rewardToken amount"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "recipientInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "fundBalance",
            docs: ["Deposited Funds token amount of the recipient"],
            type: "u64",
          },
          {
            name: "rewardBalance",
            docs: ["Rewards Token amount that needs to be vested"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "vestingAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: ["Owner address(presale)"],
            type: "pubkey",
          },
          {
            name: "vestingName",
            docs: ["Name of this vesting: Maximum 100 length"],
            type: "string",
          },
          {
            name: "amountToBeVested",
            docs: ["Total balance of this vesting contract"],
            type: "u64",
          },
          {
            name: "startTime",
            docs: ["Start time of vesting"],
            type: "u64",
          },
          {
            name: "releaseInterval",
            docs: [
              "Intervals that the release happens. Every interval, releaseRate of tokens are released.",
            ],
            type: "u64",
          },
          {
            name: "releaseRate",
            docs: ["Release percent in each withdrawing interval"],
            type: "u64",
          },
          {
            name: "vestingUnlock",
            docs: ["Percent of tokens unlocked instantly before lock period"],
            type: "u64",
          },
          {
            name: "initialUnlock",
            docs: ["Percent of tokens initially unlocked"],
            type: "u64",
          },
          {
            name: "lockPeriod",
            docs: [
              "Period before release vesting starts, also it unlocks initialUnlock reward tokens. (in time unit of block.timestamp)",
            ],
            type: "u64",
          },
          {
            name: "vestingPeriod",
            docs: [
              "Period to release all reward token, after lockPeriod + vestingPeriod it releases 100% of reward tokens. (in time unit of block.timestamp)",
            ],
            type: "u64",
          },
          {
            name: "mint",
            docs: ["Reward token of the project."],
            type: "pubkey",
          },
          {
            name: "totalVestingAmount",
            docs: ["Sum of all user's vesting amount"],
            type: "u64",
          },
        ],
      },
    },
  ],
};

export const presaleIdl = {
  address: "Fz2uso7i2r3oMESUMfmC7wBa2gfzz7me4DZfXSrKqycp",
  metadata: {
    name: "presale",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "deposit",
      discriminator: [242, 35, 198, 137, 82, 225, 242, 182],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "fund_mint",
        },
        {
          name: "reward_mint",
        },
        {
          name: "depositor_fund_token_account",
          writable: true,
        },
        {
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "recipient_info",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "reward_mint",
              },
              {
                kind: "account",
                path: "user",
              },
              {
                kind: "const",
                value: [
                  114, 101, 99, 105, 112, 105, 101, 110, 116, 45, 105, 110, 102,
                  111, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_account",
          writable: true,
        },
        {
          name: "vesting_info",
          writable: true,
        },
        {
          name: "vesting_program",
          address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vesting_account_bump",
          type: "u8",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "init_presale",
      discriminator: [172, 248, 47, 226, 223, 52, 94, 217],
      accounts: [
        {
          name: "initializer",
          writable: true,
          signer: true,
        },
        {
          name: "fund_mint",
        },
        {
          name: "reward_mint",
        },
        {
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "reward_mint",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "reward_mint",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_account",
        },
        {
          name: "vesting_program",
          address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: {
              name: "PresaleParams",
            },
          },
        },
      ],
    },
    {
      name: "pause_presale_by_emergency",
      discriminator: [132, 148, 234, 44, 101, 141, 254, 84],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "_presale_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "resume_presale",
      discriminator: [34, 45, 30, 147, 226, 254, 42, 152],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "_presale_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "set_presale_period",
      discriminator: [219, 2, 32, 67, 188, 156, 20, 175],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "_presale_account_bump",
          type: "u8",
        },
        {
          name: "new_period",
          type: "i64",
        },
      ],
    },
    {
      name: "set_start_time",
      discriminator: [29, 37, 96, 184, 63, 48, 45, 224],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "_presale_account_bump",
          type: "u8",
        },
        {
          name: "new_start_time",
          type: "i64",
        },
      ],
    },
    {
      name: "set_vesting_time",
      discriminator: [68, 99, 150, 24, 119, 189, 161, 184],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_account",
          writable: true,
        },
        {
          name: "vesting_program",
          address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presale_account_bump",
          type: "u8",
        },
        {
          name: "vesting_account_bump",
          type: "u8",
        },
        {
          name: "new_start_time",
          type: "u64",
        },
      ],
    },
    {
      name: "start_presale",
      discriminator: [57, 19, 73, 191, 195, 254, 45, 223],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "_presale_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "update_authority",
      discriminator: [32, 46, 64, 28, 149, 75, 243, 88],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "new_authority",
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
      ],
      args: [
        {
          name: "_presale_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "withdraw_funds",
      discriminator: [241, 36, 29, 111, 208, 31, 104, 217],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "project_owner_fund_token_account",
          writable: true,
        },
        {
          name: "treasury_fund_token_account",
          writable: true,
        },
        {
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "vault_account_bump",
          type: "u8",
        },
        {
          name: "_presale_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "withdraw_reward_tokens",
      discriminator: [236, 207, 121, 201, 129, 101, 234, 69],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "receive_token_account",
          writable: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_vault",
          writable: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presale_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "withdraw_unsold_token",
      discriminator: [225, 31, 78, 70, 179, 149, 96, 22],
      accounts: [
        {
          name: "user",
          writable: true,
          signer: true,
        },
        {
          name: "project_owner_reward_token_account",
          writable: true,
        },
        {
          name: "presale_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "presale_account.reward_token",
                account: "PresaleAccount",
              },
              {
                kind: "const",
                value: [
                  112, 114, 101, 115, 97, 108, 101, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_vault",
          writable: true,
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
        {
          name: "clock",
          address: "SysvarC1ock11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "presale_account_bump",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
    {
      name: "PresaleAccount",
      discriminator: [199, 34, 38, 30, 209, 182, 217, 206],
    },
    {
      name: "RecipientInfo",
      discriminator: [104, 48, 112, 95, 190, 50, 219, 214],
    },
    {
      name: "VestingAccount",
      discriminator: [102, 73, 10, 233, 200, 188, 228, 216],
    },
  ],
  errors: [
    {
      code: 6000,
      name: "VestingTokenNotEnough",
      msg: "Not enough amount deposited into vesting",
    },
    {
      code: 6001,
      name: "NotPassedKYC",
      msg: "Not passed KYC",
    },
    {
      code: 6002,
      name: "ExceedAllocation",
      msg: "Cannot exceed allocation",
    },
    {
      code: 6003,
      name: "NotExtendedPeriod",
      msg: "Not extended period",
    },
  ],
  types: [
    {
      name: "PresaleAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: ["Owner address(presale)"],
            type: "pubkey",
          },
          {
            name: "fund_token",
            docs: ["Fund token"],
            type: "pubkey",
          },
          {
            name: "reward_token",
            docs: ["Reward token(from the project)"],
            type: "pubkey",
          },
          {
            name: "project_owner",
            docs: ["Owner of this project"],
            type: "pubkey",
          },
          {
            name: "vesting_program",
            docs: ["Presale Vesting Program"],
            type: "pubkey",
          },
          {
            name: "vesting_account",
            docs: ["Account that has all vesting information"],
            type: "pubkey",
          },
          {
            name: "exchange_rate",
            docs: ["Exchange rate between the Fund token and Reward token"],
            type: "u64",
          },
          {
            name: "start_time",
            docs: ["Timestamp when presale starts"],
            type: "i64",
          },
          {
            name: "period",
            docs: ["Presale period"],
            type: "i64",
          },
          {
            name: "service_fee",
            docs: ["Service Fee : if `ACCURACY` is 1e6(default), 1e9 is 10%"],
            type: "u64",
          },
          {
            name: "initial_rewards_amount",
            docs: ["Initial Deposited rewardToken amount"],
            type: "u64",
          },
          {
            name: "is_presale_paused",
            docs: ["Presale pause status"],
            type: "bool",
          },
          {
            name: "unsold_token_withdrawn",
            docs: ["If unsold reward token is withdrawn, set to true"],
            type: "bool",
          },
          {
            name: "current_presale_period",
            docs: ["Remaining presale time when paused"],
            type: "i64",
          },
          {
            name: "public_sold_amount",
            docs: [
              "Reward token amount sold by Public Sale (init with default value)",
            ],
            type: "u64",
          },
          {
            name: "total_participants",
            docs: ["Total participants of the presale"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "PresaleParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "project_owner",
            docs: ["Owner of this project"],
            type: "pubkey",
          },
          {
            name: "rate",
            docs: ["Exchange rate between the Fund token and Reward token"],
            type: "u64",
          },
          {
            name: "start_time",
            docs: ["Timestamp when presale starts"],
            type: "i64",
          },
          {
            name: "period",
            docs: ["Presale period"],
            type: "i64",
          },
          {
            name: "service_fee",
            docs: ["Service Fee : if `ACCURACY` is 1e6(default), 1e5 is 10%"],
            type: "u64",
          },
          {
            name: "initial_rewards_amount",
            docs: ["Initial Deposited rewardToken amount"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "RecipientInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "fund_balance",
            docs: ["Deposited Funds token amount of the recipient"],
            type: "u64",
          },
          {
            name: "reward_balance",
            docs: ["Rewards Token amount that needs to be vested"],
            type: "u64",
          },
        ],
      },
    },
    {
      name: "VestingAccount",
      type: {
        kind: "struct",
        fields: [
          {
            name: "authority",
            docs: ["Owner address(presale)"],
            type: "pubkey",
          },
          {
            name: "vesting_name",
            docs: ["Name of this vesting: Maximum 100 length"],
            type: "string",
          },
          {
            name: "amount_to_be_vested",
            docs: ["Total balance of this vesting contract"],
            type: "u64",
          },
          {
            name: "start_time",
            docs: ["Start time of vesting"],
            type: "u64",
          },
          {
            name: "release_interval",
            docs: [
              "Intervals that the release happens. Every interval, releaseRate of tokens are released.",
            ],
            type: "u64",
          },
          {
            name: "release_rate",
            docs: ["Release percent in each withdrawing interval"],
            type: "u64",
          },
          {
            name: "vesting_unlock",
            docs: ["Percent of tokens unlocked instantly before lock period"],
            type: "u64",
          },
          {
            name: "initial_unlock",
            docs: ["Percent of tokens initially unlocked"],
            type: "u64",
          },
          {
            name: "lock_period",
            docs: [
              "Period before release vesting starts, also it unlocks initialUnlock reward tokens. (in time unit of block.timestamp)",
            ],
            type: "u64",
          },
          {
            name: "vesting_period",
            docs: [
              "Period to release all reward token, after lockPeriod + vestingPeriod it releases 100% of reward tokens. (in time unit of block.timestamp)",
            ],
            type: "u64",
          },
          {
            name: "mint",
            docs: ["Reward token of the project."],
            type: "pubkey",
          },
          {
            name: "total_vesting_amount",
            docs: ["Sum of all user's vesting amount"],
            type: "u64",
          },
        ],
      },
    },
  ],
};
