export const Vesting = {
  address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
  metadata: {
    name: "vesting",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "closeVesting",
      discriminator: [231, 75, 231, 133, 93, 227, 250, 252],
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
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "vestingAccountBump",
          type: "u8",
        },
        {
          name: "vaultAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "initVesting",
      discriminator: [119, 192, 67, 41, 47, 82, 152, 27],
      accounts: [
        {
          name: "initializer",
          writable: true,
          signer: true,
        },
        {
          name: "mint",
        },
        {
          name: "initializerDepositTokenAccount",
          writable: true,
        },
        {
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "mint",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "mint",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
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
          name: "systemProgram",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: {
              name: "vestingParams",
            },
          },
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
          name: "vestingAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
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
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "tokenProgram",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "vestingAccountBump",
          type: "u8",
        },
        {
          name: "vaultAccountBump",
          type: "u8",
        },
      ],
    },
    {
      name: "updateRecipient",
      discriminator: [55, 190, 61, 121, 131, 132, 8, 54],
      accounts: [
        {
          name: "authority",
          writable: true,
          signer: true,
        },
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "vestingAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingInfo",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "account",
                path: "payer",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 105, 110, 102, 111,
                ],
              },
            ],
          },
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
      name: "withdraw",
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
      accounts: [
        {
          name: "taker",
          writable: true,
          signer: true,
        },
        {
          name: "takerReceiveTokenAccount",
          writable: true,
        },
        {
          name: "vaultAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vestingAccount",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vestingInfo",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "vestingAccount",
              },
              {
                kind: "account",
                path: "taker",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 105, 110, 102, 111,
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
          name: "vestingAccountBump",
          type: "u8",
        },
        {
          name: "vaultAccountBump",
          type: "u8",
        },
        {
          name: "vestingInfoBump",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
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
      name: "vestZeroAmountError",
      msg: "Cannot vest 0",
    },
    {
      code: 6001,
      name: "exceedsTotalAmountError",
      msg: "Vesting amount exceeds current balance",
    },
    {
      code: 6002,
      name: "vestingAlreadyStartedError",
      msg: "Vesting already started",
    },
    {
      code: 6003,
      name: "invalidStartTimeError",
      msg: "Start time should be in the future",
    },
  ],
  types: [
    {
      name: "recipientInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "totalAmount",
            docs: ["Total amount of tokens to be vested."],
            type: "u64",
          },
          {
            name: "withdrawnAmount",
            docs: ["The amount that has been withdrawn."],
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
    {
      name: "vestingParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vestingName",
            docs: ["Name of this tokenomics"],
            type: "string",
          },
          {
            name: "amountToBeVested",
            docs: ["Total amount to be vested"],
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
            name: "vestingPeriod",
            docs: [
              "Period to release all reward token, after lockPeriod + vestingPeriod it releases 100% of reward tokens. (in time unit of block.timestamp)",
            ],
            type: "u64",
          },
          {
            name: "releaseInterval",
            docs: ["Amount of time in seconds between withdrawal periods."],
            type: "u64",
          },
          {
            name: "releaseRate",
            docs: ["Release percent in each withdrawing interval"],
            type: "u64",
          },
        ],
      },
    },
  ],
};

export const vestingIdl = {
  address: "6V9UuQcRQt9bGhsjCrSAVQr74fhKtWEG75FPGkuNDDqa",
  metadata: {
    name: "vesting",
    version: "0.1.0",
    spec: "0.1.0",
    description: "Created with Anchor",
  },
  instructions: [
    {
      name: "close_vesting",
      discriminator: [231, 75, 231, 133, 93, 227, 250, 252],
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
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vesting_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "_vesting_account_bump",
          type: "u8",
        },
        {
          name: "vault_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "init_vesting",
      discriminator: [119, 192, 67, 41, 47, 82, 152, 27],
      accounts: [
        {
          name: "initializer",
          writable: true,
          signer: true,
        },
        {
          name: "mint",
        },
        {
          name: "initializer_deposit_token_account",
          writable: true,
        },
        {
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "mint",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vesting_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "mint",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
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
          name: "system_program",
          address: "11111111111111111111111111111111",
        },
      ],
      args: [
        {
          name: "params",
          type: {
            defined: {
              name: "VestingParams",
            },
          },
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
          name: "vesting_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
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
          name: "_vesting_account_bump",
          type: "u8",
        },
        {
          name: "new_start_time",
          type: "u64",
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
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vesting_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "token_program",
          address: "TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA",
        },
      ],
      args: [
        {
          name: "_vesting_account_bump",
          type: "u8",
        },
        {
          name: "vault_account_bump",
          type: "u8",
        },
      ],
    },
    {
      name: "update_recipient",
      discriminator: [55, 190, 61, 121, 131, 132, 8, 54],
      accounts: [
        {
          name: "authority",
          writable: true,
          signer: true,
        },
        {
          name: "payer",
          writable: true,
          signer: true,
        },
        {
          name: "vesting_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_info",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "account",
                path: "payer",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 105, 110, 102, 111,
                ],
              },
            ],
          },
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
          name: "_vesting_account_bump",
          type: "u8",
        },
        {
          name: "amount",
          type: "u64",
        },
      ],
    },
    {
      name: "withdraw",
      discriminator: [183, 18, 70, 156, 148, 109, 161, 34],
      accounts: [
        {
          name: "taker",
          writable: true,
          signer: true,
        },
        {
          name: "taker_receive_token_account",
          writable: true,
        },
        {
          name: "vault_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [116, 111, 107, 101, 110, 45, 115, 101, 101, 100],
              },
            ],
          },
        },
        {
          name: "vesting_account",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 115, 101, 101, 100,
                ],
              },
            ],
          },
        },
        {
          name: "vesting_info",
          writable: true,
          pda: {
            seeds: [
              {
                kind: "account",
                path: "vesting_account.mint",
                account: "VestingAccount",
              },
              {
                kind: "account",
                path: "taker",
              },
              {
                kind: "const",
                value: [
                  118, 101, 115, 116, 105, 110, 103, 45, 105, 110, 102, 111,
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
          name: "_vesting_account_bump",
          type: "u8",
        },
        {
          name: "vault_account_bump",
          type: "u8",
        },
        {
          name: "_vesting_info_bump",
          type: "u8",
        },
      ],
    },
  ],
  accounts: [
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
      name: "VestZeroAmountError",
      msg: "Cannot vest 0",
    },
    {
      code: 6001,
      name: "ExceedsTotalAmountError",
      msg: "Vesting amount exceeds current balance",
    },
    {
      code: 6002,
      name: "VestingAlreadyStartedError",
      msg: "Vesting already started",
    },
    {
      code: 6003,
      name: "InvalidStartTimeError",
      msg: "Start time should be in the future",
    },
  ],
  types: [
    {
      name: "RecipientInfo",
      type: {
        kind: "struct",
        fields: [
          {
            name: "total_amount",
            docs: ["Total amount of tokens to be vested."],
            type: "u64",
          },
          {
            name: "withdrawn_amount",
            docs: ["The amount that has been withdrawn."],
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
    {
      name: "VestingParams",
      type: {
        kind: "struct",
        fields: [
          {
            name: "vesting_name",
            docs: ["Name of this tokenomics"],
            type: "string",
          },
          {
            name: "amount_to_be_vested",
            docs: ["Total amount to be vested"],
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
            name: "vesting_period",
            docs: [
              "Period to release all reward token, after lockPeriod + vestingPeriod it releases 100% of reward tokens. (in time unit of block.timestamp)",
            ],
            type: "u64",
          },
          {
            name: "release_interval",
            docs: ["Amount of time in seconds between withdrawal periods."],
            type: "u64",
          },
          {
            name: "release_rate",
            docs: ["Release percent in each withdrawing interval"],
            type: "u64",
          },
        ],
      },
    },
  ],
};
