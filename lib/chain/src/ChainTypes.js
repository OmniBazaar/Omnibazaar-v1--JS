let ChainTypes = {};

ChainTypes.reserved_spaces = {
    relative_protocol_ids: 0,
    protocol_ids: 1,
    implementation_ids: 2
};

ChainTypes.object_type = {
    "null": 0,
    base: 1,
    account: 2,
    asset: 3,
    force_settlement: 4,
    committee_member: 5,
    witness: 6,
    limit_order: 7,
    call_order: 8,
    custom: 9,
    proposal: 10,
    operation_history: 11,
    withdraw_permission: 12,
    vesting_balance: 13,
    worker: 14,
    balance: 15,
    escrow: 16,
    listing: 17
};

ChainTypes.impl_object_type = {
    global_property: 0,
    dynamic_global_property: 1,
    index_meta: 2,
    asset_dynamic_data: 3,
    asset_bitasset_data: 4,
    account_balance: 5,
    account_statistics: 6,
    transaction: 7,
    block_summary: 8,
    account_transaction_history: 9,
    blinded_balance: 10,
    chain_property: 11,
    witness_schedule: 12,
    budget_record: 13
};

ChainTypes.vote_type = {
    committee: 0,
    witness: 1,
    worker: 2
};

ChainTypes.operations = {
    transfer: 0,
    limit_order_create: 1,
    limit_order_cancel: 2,
    call_order_update: 3,
    fill_order: 4,
    account_create: 5,
    account_update: 6,
    account_whitelist: 7,
    account_transfer: 8,
    asset_create: 9,
    asset_update: 10,
    asset_update_bitasset: 11,
    asset_update_feed_producers: 12,
    asset_issue: 13,
    asset_reserve: 14,
    asset_fund_fee_pool: 15,
    asset_settle: 16,
    asset_global_settle: 17,
    asset_publish_feed: 18,
    witness_create: 19,
    witness_update: 20,
    proposal_create: 21,
    proposal_update: 22,
    proposal_delete: 23,
    withdraw_permission_create: 24,
    withdraw_permission_update: 25,
    withdraw_permission_claim: 26,
    withdraw_permission_delete: 27,
    committee_member_create: 28,
    committee_member_update: 29,
    committee_member_update_global_parameters: 30,
    vesting_balance_create: 31,
    vesting_balance_withdraw: 32,
    worker_create: 33,
    custom: 34,
    assert: 35,
    balance_claim: 36,
    override_transfer: 37,
    transfer_to_blind: 38,
    blind_transfer: 39,
    transfer_from_blind: 40,
    asset_settle_cancel: 41,
    asset_claim_fees: 42,
    fba_distribute_operation: 43,
    bid_collateral_operation: 44,
    execute_bid_operation: 45,
    welcome_bonus_operation: 46,
    referral_bonus_operation: 47,
    sale_bonus_operation: 48,
    founder_bonus_operation: 49,
    witness_bonus_operation: 50,
    escrow_create_operation: 51,
    escrow_release_operation: 52,
    escrow_return_operation: 53,
    multisig_transfer_operation: 54,
    listing_create_operation: 55,
    listing_update_operation: 56,
    listing_delete_operation: 57,
    listing_report_operation: 58,
    escrow_extend_operation: 59,
    verification_operation: 60,
    exchange_create_operation: 61,
    exchange_complete_operation: 62
};

export default ChainTypes;
