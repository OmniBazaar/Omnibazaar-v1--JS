import types from "./types";
import SerializerImpl from "./serializer";

var {
    //id_type,
    //varint32,
    uint8, uint16, uint32, int64, uint64,
    string, bytes, bool, array, fixed_array,
    protocol_id_type, object_id_type, vote_id,
    future_extensions,
    static_variant, map, set,
    public_key, address,
    time_point_sec,
    optional,
} = types;

future_extensions = types.void;

/*
When updating generated code
Replace:  operation = static_variant [
with:     operation.st_operations = [

Delete:
public_key = new Serializer(
    "public_key"
    key_data: bytes 33
)

*/
// Place-holder, their are dependencies on "operation" .. The final list of
// operations is not avialble until the very end of the generated code.
// See: operation.st_operations = ...
var operation = static_variant();
// module.exports["operation"] = operation;

export { operation };
// For module.exports
var Serializer = function(operation_name, serilization_types_object){
    return new SerializerImpl(operation_name, serilization_types_object);
    // return module.exports[operation_name] = s;
}

// Custom-types follow Generated code:

// ##  Generated code follows
// # programs/js_operation_serializer > npm i -g decaffeinate
// ## -------------------------------
export const transfer_operation_fee_parameters = new Serializer(
    "transfer_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);


export const limit_order_create_operation_fee_parameters = new Serializer(
    "limit_order_create_operation_fee_parameters",
    {fee: uint64}
);

export const limit_order_cancel_operation_fee_parameters = new Serializer(
    "limit_order_cancel_operation_fee_parameters",
    {fee: uint64}
);

export const call_order_update_operation_fee_parameters = new Serializer(
    "call_order_update_operation_fee_parameters",
    {fee: uint64}
);

export const fill_order_operation_fee_parameters = new Serializer(
    "fill_order_operation_fee_parameters"
);

export const account_create_operation_fee_parameters = new Serializer(
    "account_create_operation_fee_parameters",
    {basic_fee: uint64,
    price_per_kbyte: uint32}
);

export const account_update_operation_fee_parameters = new Serializer(
    "account_update_operation_fee_parameters",
    {fee: int64,
    price_per_kbyte: uint32}
);

export const account_whitelist_operation_fee_parameters = new Serializer(
    "account_whitelist_operation_fee_parameters",
    {fee: int64}
);


export const account_transfer_operation_fee_parameters = new Serializer(
    "account_transfer_operation_fee_parameters",
    {fee: uint64}
);


export const asset_create_operation_fee_parameters = new Serializer(
    "asset_create_operation_fee_parameters",
    {symbol3: uint64,
    symbol4: uint64,
    long_symbol: uint64,
    price_per_kbyte: uint32}
);

export const asset_update_operation_fee_parameters = new Serializer(
    "asset_update_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const asset_update_bitasset_operation_fee_parameters = new Serializer(
    "asset_update_bitasset_operation_fee_parameters",
    {fee: uint64}
);

export const asset_update_feed_producers_operation_fee_parameters = new Serializer(
    "asset_update_feed_producers_operation_fee_parameters",
    {fee: uint64}
);

export const asset_issue_operation_fee_parameters = new Serializer(
    "asset_issue_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const asset_reserve_operation_fee_parameters = new Serializer(
    "asset_reserve_operation_fee_parameters",
    {fee: uint64}
);

export const asset_fund_fee_pool_operation_fee_parameters = new Serializer(
    "asset_fund_fee_pool_operation_fee_parameters",
    {fee: uint64}
);

export const asset_settle_operation_fee_parameters = new Serializer(
    "asset_settle_operation_fee_parameters",
    {fee: uint64}
);

export const asset_global_settle_operation_fee_parameters = new Serializer(
    "asset_global_settle_operation_fee_parameters",
    {fee: uint64}
);

export const asset_publish_feed_operation_fee_parameters = new Serializer(
    "asset_publish_feed_operation_fee_parameters",
    {fee: uint64}
);

export const witness_create_operation_fee_parameters = new Serializer(
    "witness_create_operation_fee_parameters",
    {fee: uint64}
);

export const witness_update_operation_fee_parameters = new Serializer(
    "witness_update_operation_fee_parameters",
    {fee: int64}
);

export const proposal_create_operation_fee_parameters = new Serializer(
    "proposal_create_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const proposal_update_operation_fee_parameters = new Serializer(
    "proposal_update_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const proposal_delete_operation_fee_parameters = new Serializer(
    "proposal_delete_operation_fee_parameters",
    {fee: uint64}
);

export const withdraw_permission_create_operation_fee_parameters = new Serializer(
    "withdraw_permission_create_operation_fee_parameters",
    {fee: uint64}
);

export const withdraw_permission_update_operation_fee_parameters = new Serializer(
    "withdraw_permission_update_operation_fee_parameters",
    {fee: uint64}
);

export const withdraw_permission_claim_operation_fee_parameters = new Serializer(
    "withdraw_permission_claim_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const withdraw_permission_delete_operation_fee_parameters = new Serializer(
    "withdraw_permission_delete_operation_fee_parameters",
    {fee: uint64}
);

export const committee_member_create_operation_fee_parameters = new Serializer(
    "committee_member_create_operation_fee_parameters",
    {fee: uint64}
);

export const committee_member_update_operation_fee_parameters = new Serializer(
    "committee_member_update_operation_fee_parameters",
    {fee: uint64}
);

export const committee_member_update_global_parameters_operation_fee_parameters = new Serializer(
    "committee_member_update_global_parameters_operation_fee_parameters",
    {fee: uint64}
);

export const vesting_balance_create_operation_fee_parameters = new Serializer(
    "vesting_balance_create_operation_fee_parameters",
    {fee: uint64}
);

export const vesting_balance_withdraw_operation_fee_parameters = new Serializer(
    "vesting_balance_withdraw_operation_fee_parameters",
    {fee: uint64}
);

export const worker_create_operation_fee_parameters = new Serializer(
    "worker_create_operation_fee_parameters",
    {fee: uint64}
);

export const custom_operation_fee_parameters = new Serializer(
    "custom_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const assert_operation_fee_parameters = new Serializer(
    "assert_operation_fee_parameters",
    {fee: uint64}
);

export const balance_claim_operation_fee_parameters = new Serializer(
    "balance_claim_operation_fee_parameters"
);

export const override_transfer_operation_fee_parameters = new Serializer(
    "override_transfer_operation_fee_parameters",
    {fee: uint64,
    price_per_kbyte: uint32}
);

export const transfer_to_blind_operation_fee_parameters = new Serializer(
    "transfer_to_blind_operation_fee_parameters",
    {fee: uint64,
    price_per_output: uint32}
);

export const blind_transfer_operation_fee_parameters = new Serializer(
    "blind_transfer_operation_fee_parameters",
    {fee: uint64,
    price_per_output: uint32}
);

export const transfer_from_blind_operation_fee_parameters = new Serializer(
    "transfer_from_blind_operation_fee_parameters",
    {fee: uint64}
);

export const asset_settle_cancel_operation_fee_parameters = new Serializer(
    "asset_settle_cancel_operation_fee_parameters"
);

export const asset_claim_fees_operation_fee_parameters = new Serializer(
    "asset_claim_fees_operation_fee_parameters",
    {fee: uint64}
);

export const escrow_extend_operation_fee_parameters = new Serializer(
    "escrow_extend_operation_fee_parameters", {
        fee: uint64,
        price_per_kbyte: uint32
    });

export const verification_operation_fee_parameters = new Serializer(
    "verification_operation_fee_parameters",
    {fee: uint64}
);

export const exchange_create_operation_fee_parameters = new Serializer(
    "exchange_create_operation_fee_parameters", {
        fee: uint64,
        price_per_kbyte: uint32
    }
);

export const exchange_complete_operation_fee_parameters = new Serializer(
    "exchange_complete_operation_fee_parameters", {
        fee: uint64
    }
);

var fee_parameters = static_variant([
    transfer_operation_fee_parameters,
    limit_order_create_operation_fee_parameters,
    limit_order_cancel_operation_fee_parameters,
    call_order_update_operation_fee_parameters,
    fill_order_operation_fee_parameters,
    account_create_operation_fee_parameters,
    account_update_operation_fee_parameters,
    account_whitelist_operation_fee_parameters,
    account_transfer_operation_fee_parameters,
    asset_create_operation_fee_parameters,
    asset_update_operation_fee_parameters,
    asset_update_bitasset_operation_fee_parameters,
    asset_update_feed_producers_operation_fee_parameters,
    asset_issue_operation_fee_parameters,
    asset_reserve_operation_fee_parameters,
    asset_fund_fee_pool_operation_fee_parameters,
    asset_settle_operation_fee_parameters,
    asset_global_settle_operation_fee_parameters,
    asset_publish_feed_operation_fee_parameters,
    witness_create_operation_fee_parameters,
    witness_update_operation_fee_parameters,
    proposal_create_operation_fee_parameters,
    proposal_update_operation_fee_parameters,
    proposal_delete_operation_fee_parameters,
    withdraw_permission_create_operation_fee_parameters,
    withdraw_permission_update_operation_fee_parameters,
    withdraw_permission_claim_operation_fee_parameters,
    withdraw_permission_delete_operation_fee_parameters,
    committee_member_create_operation_fee_parameters,
    committee_member_update_operation_fee_parameters,
    committee_member_update_global_parameters_operation_fee_parameters,
    vesting_balance_create_operation_fee_parameters,
    vesting_balance_withdraw_operation_fee_parameters,
    worker_create_operation_fee_parameters,
    custom_operation_fee_parameters,
    assert_operation_fee_parameters,
    balance_claim_operation_fee_parameters,
    override_transfer_operation_fee_parameters,
    transfer_to_blind_operation_fee_parameters,
    blind_transfer_operation_fee_parameters,
    transfer_from_blind_operation_fee_parameters,
    asset_settle_cancel_operation_fee_parameters,
    asset_claim_fees_operation_fee_parameters,
    escrow_extend_operation_fee_parameters,
    verification_operation_fee_parameters,
    exchange_create_operation_fee_parameters,
    exchange_complete_operation_fee_parameters
]);

export const fee_schedule = new Serializer(
    "fee_schedule",
    {parameters: set(fee_parameters),
    scale: uint32}
);

export const void_result = new Serializer(
    "void_result"
);

export const asset = new Serializer(
    "asset",
    {amount: int64,
    asset_id: protocol_id_type("asset")}
);

var operation_result = static_variant([
    void_result,
    object_id_type,
    asset
]);

export const omnibazaar_fee = new Serializer(
    "omnibazaar_fee",
    {
        omnibazaar_fee: optional(asset),
        escrow_fee: optional(asset),
        referrer_buyer_fee: optional(asset),
        referrer_seller_fee: optional(asset),
        publisher_fee: optional(asset),
        extensions: set(future_extensions)
    }
);


export const processed_transaction = new Serializer(
    "processed_transaction",
    {ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65)),
    operation_results: array(operation_result)}
);

export const signed_block = new Serializer(
    "signed_block",
    {previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions),
    witness_signature: bytes(65),
    transactions: array(processed_transaction)}
);

export const block_header = new Serializer(
    "block_header",
    {previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions)}
);

export const signed_block_header = new Serializer(
    "signed_block_header",
    {previous: bytes(20),
    timestamp: time_point_sec,
    witness: protocol_id_type("witness"),
    transaction_merkle_root: bytes(20),
    extensions: set(future_extensions),
    witness_signature: bytes(65)}
);

export const memo_data = new Serializer(
    "memo_data",
    {from: public_key,
    to: public_key,
    nonce: uint64,
    message: bytes()}
);

export const transfer = new Serializer(
    "transfer",
    {fee: asset,
    ob_fee: omnibazaar_fee,
    from: protocol_id_type("account"),
    to: protocol_id_type("account"),
    amount: asset,
    memo: optional(memo_data),
    extensions: set(future_extensions),
    reputation_vote: uint16,
    listing: optional(protocol_id_type("listing")),
    listing_count: optional(uint32),
    }
);

export const limit_order_create = new Serializer(
    "limit_order_create",
    {fee: asset,
    seller: protocol_id_type("account"),
    amount_to_sell: asset,
    min_to_receive: asset,
    expiration: time_point_sec,
    fill_or_kill: bool,
    extensions: set(future_extensions)}
);

export const limit_order_cancel = new Serializer(
    "limit_order_cancel",
    {fee: asset,
    fee_paying_account: protocol_id_type("account"),
    order: protocol_id_type("limit_order"),
    extensions: set(future_extensions)}
);

export const call_order_update = new Serializer(
    "call_order_update",
    {fee: asset,
    funding_account: protocol_id_type("account"),
    delta_collateral: asset,
    delta_debt: asset,
    extensions: set(future_extensions)}
);

export const fill_order = new Serializer(
    "fill_order",
    {fee: asset,
    order_id: object_id_type,
    account_id: protocol_id_type("account"),
    pays: asset,
    receives: asset}
);

export const authority = new Serializer(
    "authority",
    {weight_threshold: uint32,
    account_auths: map((protocol_id_type("account")), (uint16)),
    key_auths: map((public_key), (uint16)),
    address_auths: map((address), (uint16))}
);

export const account_options = new Serializer(
    "account_options",
    {memo_key: public_key,
    voting_account: protocol_id_type("account"),
    num_witness: uint16,
    num_committee: uint16,
    votes: set(vote_id),
    extensions: set(future_extensions)}
);

export const account_create = new Serializer(
    "account_create",
    {fee: asset,
    registrar: protocol_id_type("account"),
    referrer: protocol_id_type("account"),
    referrer_percent: uint16,
    name: string,
    owner: authority,
    active: authority,
    drive_id: string,
    mac_address: string,
    btc_address: string,
    options: account_options,
    extensions: set(future_extensions)}
);

export const escrow_options = new Serializer(
    "escrow_options", {
        positive_rating: bool,
        voted_witness: bool,
        active_witness: bool
    }
);

export const account_update = new Serializer(
    "account_update",
    {fee: asset,
    account: protocol_id_type("account"),
    owner: optional(authority),
    active: optional(authority),
    new_options: optional(account_options),
    extensions: set(future_extensions),
    is_a_publisher: optional(bool),
    publisher_ip: optional(string),
    is_an_escrow: optional(bool),
    escrow_fee: optional(uint16),
    escrows: optional(set(protocol_id_type("account"))),
    implicit_escrow_options: optional(escrow_options),
    is_referrer: optional(bool),
    publisher_fee: optional(uint16),
    btc_address: optional(string),
    eth_address:optional(string)}
);

export const account_whitelist = new Serializer(
    "account_whitelist",
    {fee: asset,
    authorizing_account: protocol_id_type("account"),
    account_to_list: protocol_id_type("account"),
    new_listing: uint8,
    extensions: set(future_extensions)}
);


export const account_transfer = new Serializer(
    "account_transfer",
    {fee: asset,
    account_id: protocol_id_type("account"),
    new_owner: protocol_id_type("account"),
    extensions: set(future_extensions)}
);

export const price = new Serializer(
    "price",
    {base: asset,
    quote: asset}
);

export const asset_options = new Serializer(
    "asset_options",
    {max_supply: int64,
    market_fee_percent: uint16,
    max_market_fee: int64,
    issuer_permissions: uint16,
    flags: uint16,
    core_exchange_rate: price,
    whitelist_authorities: set(protocol_id_type("account")),
    blacklist_authorities: set(protocol_id_type("account")),
    whitelist_markets: set(protocol_id_type("asset")),
    blacklist_markets: set(protocol_id_type("asset")),
    description: string,
    extensions: set(future_extensions)}
);

export const bitasset_options = new Serializer(
    "bitasset_options",
    {feed_lifetime_sec: uint32,
    minimum_feeds: uint8,
    force_settlement_delay_sec: uint32,
    force_settlement_offset_percent: uint16,
    maximum_force_settlement_volume: uint16,
    short_backing_asset: protocol_id_type("asset"),
    extensions: set(future_extensions)}
);

export const asset_create = new Serializer(
    "asset_create",
    {fee: asset,
    issuer: protocol_id_type("account"),
    symbol: string,
    precision: uint8,
    common_options: asset_options,
    bitasset_opts: optional(bitasset_options),
    is_prediction_market: bool,
    extensions: set(future_extensions)}
);

export const asset_update = new Serializer(
    "asset_update",
    {fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_update: protocol_id_type("asset"),
    new_issuer: optional(protocol_id_type("account")),
    new_options: asset_options,
    extensions: set(future_extensions)}
);

export const asset_update_bitasset = new Serializer(
    "asset_update_bitasset",
    {fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_update: protocol_id_type("asset"),
    new_options: bitasset_options,
    extensions: set(future_extensions)}
);

export const asset_update_feed_producers = new Serializer(
    "asset_update_feed_producers",
    {fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_update: protocol_id_type("asset"),
    new_feed_producers: set(protocol_id_type("account")),
    extensions: set(future_extensions)}
);

export const asset_issue = new Serializer(
    "asset_issue",
    {fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_issue: asset,
    issue_to_account: protocol_id_type("account"),
    memo: optional(memo_data),
    extensions: set(future_extensions)}
);

export const asset_reserve = new Serializer(
    "asset_reserve",
    {fee: asset,
    payer: protocol_id_type("account"),
    amount_to_reserve: asset,
    extensions: set(future_extensions)}
);

export const asset_fund_fee_pool = new Serializer(
    "asset_fund_fee_pool",
    {fee: asset,
    from_account: protocol_id_type("account"),
    asset_id: protocol_id_type("asset"),
    amount: int64,
    extensions: set(future_extensions)}
);

export const asset_settle = new Serializer(
    "asset_settle",
    {fee: asset,
    account: protocol_id_type("account"),
    amount: asset,
    extensions: set(future_extensions)}
);

export const asset_global_settle = new Serializer(
    "asset_global_settle",
    {fee: asset,
    issuer: protocol_id_type("account"),
    asset_to_settle: protocol_id_type("asset"),
    settle_price: price,
    extensions: set(future_extensions)}
);

export const price_feed = new Serializer(
    "price_feed",
    {settlement_price: price,
    maintenance_collateral_ratio: uint16,
    maximum_short_squeeze_ratio: uint16,
    core_exchange_rate: price}
);

export const asset_publish_feed = new Serializer(
    "asset_publish_feed",
    {fee: asset,
    publisher: protocol_id_type("account"),
    asset_id: protocol_id_type("asset"),
    feed: price_feed,
    extensions: set(future_extensions)}
);

export const witness_create = new Serializer(
    "witness_create",
    {fee: asset,
    witness_account: protocol_id_type("account"),
    url: string,
    block_signing_key: public_key}
);

export const witness_update = new Serializer(
    "witness_update",
    {fee: asset,
    witness: protocol_id_type("witness"),
    witness_account: protocol_id_type("account"),
    new_url: optional(string),
    new_signing_key: optional(public_key)}
);

export const op_wrapper = new Serializer(
    "op_wrapper",
    {op: operation}
);

export const proposal_create = new Serializer(
    "proposal_create",
    {fee: asset,
    fee_paying_account: protocol_id_type("account"),
    expiration_time: time_point_sec,
    proposed_ops: array(op_wrapper),
    review_period_seconds: optional(uint32),
    extensions: set(future_extensions)}
);

export const proposal_update = new Serializer(
    "proposal_update",
    {fee: asset,
    fee_paying_account: protocol_id_type("account"),
    proposal: protocol_id_type("proposal"),
    active_approvals_to_add: set(protocol_id_type("account")),
    active_approvals_to_remove: set(protocol_id_type("account")),
    owner_approvals_to_add: set(protocol_id_type("account")),
    owner_approvals_to_remove: set(protocol_id_type("account")),
    key_approvals_to_add: set(public_key),
    key_approvals_to_remove: set(public_key),
    extensions: set(future_extensions)}
);

export const proposal_delete = new Serializer(
    "proposal_delete",
    {fee: asset,
    fee_paying_account: protocol_id_type("account"),
    using_owner_authority: bool,
    proposal: protocol_id_type("proposal"),
    extensions: set(future_extensions)}
);

export const withdraw_permission_create = new Serializer(
    "withdraw_permission_create",
    {fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    periods_until_expiration: uint32,
    period_start_time: time_point_sec}
);

export const withdraw_permission_update = new Serializer(
    "withdraw_permission_update",
    {fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    permission_to_update: protocol_id_type("withdraw_permission"),
    withdrawal_limit: asset,
    withdrawal_period_sec: uint32,
    period_start_time: time_point_sec,
    periods_until_expiration: uint32}
);

export const withdraw_permission_claim = new Serializer(
    "withdraw_permission_claim",
    {fee: asset,
    withdraw_permission: protocol_id_type("withdraw_permission"),
    withdraw_from_account: protocol_id_type("account"),
    withdraw_to_account: protocol_id_type("account"),
    amount_to_withdraw: asset,
    memo: optional(memo_data)}
);

export const withdraw_permission_delete = new Serializer(
    "withdraw_permission_delete",
    {fee: asset,
    withdraw_from_account: protocol_id_type("account"),
    authorized_account: protocol_id_type("account"),
    withdrawal_permission: protocol_id_type("withdraw_permission")}
);

export const committee_member_create = new Serializer(
    "committee_member_create",
    {fee: asset,
    committee_member_account: protocol_id_type("account"),
    url: string}
);

export const committee_member_update = new Serializer(
    "committee_member_update",
    {fee: asset,
    committee_member: protocol_id_type("committee_member"),
    committee_member_account: protocol_id_type("account"),
    new_url: optional(string)}
);

export const chain_parameters = new Serializer(
    "chain_parameters",
    {current_fees: fee_schedule,
    block_interval: uint8,
    maintenance_interval: uint32,
    maintenance_skip_slots: uint8,
    committee_proposal_review_period: uint32,
    maximum_transaction_size: uint32,
    maximum_block_size: uint32,
    maximum_time_until_expiration: uint32,
    maximum_proposal_lifetime: uint32,
    maximum_asset_whitelist_authorities: uint8,
    maximum_asset_feed_publishers: uint8,
    maximum_witness_count: uint16,
    maximum_committee_count: uint16,
    maximum_authority_membership: uint16,
    reserve_percent_of_fee: uint16,
    network_percent_of_fee: uint16,
    lifetime_referrer_percent_of_fee: uint16,
    cashback_vesting_period_seconds: uint32,
    cashback_vesting_threshold: int64,
    count_non_member_votes: bool,
    allow_non_member_whitelists: bool,
    witness_pay_per_block: int64,
    worker_budget_per_day: int64,
    max_predicate_opcode: uint16,
    fee_liquidation_threshold: int64,
    accounts_per_fee_scale: uint16,
    account_fee_scale_bitshifts: uint8,
    max_authority_depth: uint8,
    maximum_escrow_lifetime: uint32,
    maximum_listing_lifetime: uint32,
    listing_ban_threshold: uint32,
    maximum_listing_priority_fee: uint16,
    extensions: set(future_extensions)}
);

export const committee_member_update_global_parameters = new Serializer(
    "committee_member_update_global_parameters",
    {fee: asset,
    new_parameters: chain_parameters}
);

export const linear_vesting_policy_initializer = new Serializer(
    "linear_vesting_policy_initializer",
    {begin_timestamp: time_point_sec,
    vesting_cliff_seconds: uint32,
    vesting_duration_seconds: uint32}
);

export const cdd_vesting_policy_initializer = new Serializer(
    "cdd_vesting_policy_initializer",
    {start_claim: time_point_sec,
    vesting_seconds: uint32}
);

var vesting_policy_initializer = static_variant([
    linear_vesting_policy_initializer,
    cdd_vesting_policy_initializer
]);

export const vesting_balance_create = new Serializer(
    "vesting_balance_create",
    {fee: asset,
    creator: protocol_id_type("account"),
    owner: protocol_id_type("account"),
    amount: asset,
    policy: vesting_policy_initializer}
);

export const vesting_balance_withdraw = new Serializer(
    "vesting_balance_withdraw",
    {fee: asset,
    vesting_balance: protocol_id_type("vesting_balance"),
    owner: protocol_id_type("account"),
    amount: asset}
);

export const refund_worker_initializer = new Serializer(
    "refund_worker_initializer"
);

export const vesting_balance_worker_initializer = new Serializer(
    "vesting_balance_worker_initializer",
    {pay_vesting_period_days: uint16}
);

export const burn_worker_initializer = new Serializer(
    "burn_worker_initializer"
);

var worker_initializer = static_variant([
    refund_worker_initializer,
    vesting_balance_worker_initializer,
    burn_worker_initializer
]);

export const worker_create = new Serializer(
    "worker_create",
    {fee: asset,
    owner: protocol_id_type("account"),
    work_begin_date: time_point_sec,
    work_end_date: time_point_sec,
    daily_pay: int64,
    name: string,
    url: string,
    initializer: worker_initializer}
);

export const custom = new Serializer(
    "custom",
    {fee: asset,
    payer: protocol_id_type("account"),
    required_auths: set(protocol_id_type("account")),
    id: uint16,
    data: bytes()}
);

export const account_name_eq_lit_predicate = new Serializer(
    "account_name_eq_lit_predicate",
    {account_id: protocol_id_type("account"),
    name: string}
);

export const asset_symbol_eq_lit_predicate = new Serializer(
    "asset_symbol_eq_lit_predicate",
    {asset_id: protocol_id_type("asset"),
    symbol: string}
);

export const block_id_predicate = new Serializer(
    "block_id_predicate",
    {id: bytes(20)}
);

var predicate = static_variant([
    account_name_eq_lit_predicate,
    asset_symbol_eq_lit_predicate,
    block_id_predicate
]);

export const assert = new Serializer(
    "assert",
    {fee: asset,
    fee_paying_account: protocol_id_type("account"),
    predicates: array(predicate),
    required_auths: set(protocol_id_type("account")),
    extensions: set(future_extensions)}
);

export const balance_claim = new Serializer(
    "balance_claim",
    {fee: asset,
    deposit_to_account: protocol_id_type("account"),
    balance_to_claim: protocol_id_type("balance"),
    balance_owner_key: public_key,
    total_claimed: asset}
);

export const override_transfer = new Serializer(
    "override_transfer",
    {fee: asset,
    issuer: protocol_id_type("account"),
    from: protocol_id_type("account"),
    to: protocol_id_type("account"),
    amount: asset,
    memo: optional(memo_data),
    extensions: set(future_extensions)}
);

export const stealth_confirmation = new Serializer(
    "stealth_confirmation",
    {one_time_key: public_key,
    to: optional(public_key),
    encrypted_memo: bytes()}
);

export const blind_output = new Serializer(
    "blind_output",
    {commitment: bytes(33),
    range_proof: bytes(),
    owner: authority,
    stealth_memo: optional(stealth_confirmation)}
);

export const transfer_to_blind = new Serializer(
    "transfer_to_blind",
    {fee: asset,
    amount: asset,
    from: protocol_id_type("account"),
    blinding_factor: bytes(32),
    outputs: array(blind_output)}
);

export const blind_input = new Serializer(
    "blind_input",
    {commitment: bytes(33),
    owner: authority}
);

export const blind_transfer = new Serializer(
    "blind_transfer",
    {fee: asset,
    inputs: array(blind_input),
    outputs: array(blind_output)}
);

export const transfer_from_blind = new Serializer(
    "transfer_from_blind",
    {fee: asset,
    amount: asset,
    to: protocol_id_type("account"),
    blinding_factor: bytes(32),
    inputs: array(blind_input)}
);

export const asset_settle_cancel = new Serializer(
    "asset_settle_cancel",
    {fee: asset,
    settlement: protocol_id_type("force_settlement"),
    account: protocol_id_type("account"),
    amount: asset,
    extensions: set(future_extensions)}
);

export const asset_claim_fees = new Serializer(
    "asset_claim_fees",
    {fee: asset,
    issuer: protocol_id_type("account"),
    amount_to_claim: asset,
    extensions: set(future_extensions)}
);

//todo
export const fba_distribute_operation = new Serializer(
    "fba_distribute_operation",
    {fee: asset}
);

//todo
export const bid_collateral_operation = new Serializer(
    "bid_collateral_operation",
    {fee: asset}
);

//todo
export const execute_bid_operation = new Serializer(
    "execute_bid_operation",
    {fee: asset}
);

export const welcome_bonus_operation = new Serializer(
    "welcome_bonus_operation",
    {
        fee: asset,
        receiver: protocol_id_type('account'),
        drive_id: string,
        mac_address: string,
        extensions: set(future_extensions)
    }
);


export const referral_bonus_operation = new Serializer(
    "referral_bonus_operation",
    {
        fee: asset,
        referred_account: protocol_id_type('account'),
        referrer_account: protocol_id_type('account'),
        extensions: set(future_extensions)
    }
);

export const sale_bonus_operation = new Serializer(
    "sale_bonus_operation",
    {
        fee: asset,
        payer: protocol_id_type('account'),
        seller: protocol_id_type('account'),
        buyer: protocol_id_type('account'),
        extensions: set(future_extensions)
    }
);

//todo
export const founder_bonus_operation = new Serializer(
    "founder_bonus_operation",
    {
        fee: asset,
        payer: protocol_id_type('account'),
        extensions: set(future_extensions)
    }
);

//todo
export const witness_bonus_operation = new Serializer(
    "witness_bonus_operation",
    {
        fee: asset,
        payer: protocol_id_type('account'),
        receiver: protocol_id_type('account'),
        extensions: set(future_extensions)
    }
);

export const escrow_create_operation = new Serializer(
    "escrow_create_operation",
    {
        fee: asset,
        ob_fee: omnibazaar_fee,
        expiration_time: time_point_sec,
        buyer: protocol_id_type("account"),
        seller: protocol_id_type("account"),
        escrow: protocol_id_type("account"),
        amount: asset,
        transfer_to_escrow: bool,
        memo: optional(memo_data),
        listing: optional(protocol_id_type("listing")),
        listing_count: optional(uint32),
        extensions: set(future_extensions)
    }
);

export const escrow_release_operation = new Serializer(
    "escrow_release_operation",
    {
        fee: asset,
        fee_paying_account: protocol_id_type("account"),
        escrow: protocol_id_type("escrow"),
        buyer_account: protocol_id_type("account"),
        escrow_account: protocol_id_type("account"),
        seller_account: protocol_id_type("account"),
        memo: optional(memo_data),
        reputation_vote_for_seller: uint16,
        reputation_vote_for_buyer: uint16,
        reputation_vote_for_escrow: uint16,
        extensions: set(future_extensions)
    }
);

export const escrow_return_operation = new Serializer(
    "escrow_return_operation",
    {
        fee: asset,
        fee_paying_account: protocol_id_type("account"),
        escrow: protocol_id_type("escrow"),
        seller_account: protocol_id_type("account"),
        escrow_account: protocol_id_type("account"),
        buyer_account: protocol_id_type("account"),
        memo: optional(memo_data),
        reputation_vote_for_seller: uint16,
        reputation_vote_for_buyer: uint16,
        reputation_vote_for_escrow: uint16,
        extensions: set(future_extensions)
    }
);

//todo
export const multisig_transfer_operation = new Serializer(
    "multisig_transfer_operation",
    {fee: asset,
    ob_fee: omnibazaar_fee,
    from: protocol_id_type('account'),
    to: protocol_id_type('account'),
    amount: asset,
    memo: optional(memo_data),
    extensions: set(future_extensions),
    reputation_vote: uint16,
    listing: optional(protocol_id_type('listing')),
    listing_count: optional(uint32),
    signatories: set(protocol_id_type('account'))
    }
);

export const listing_create_operation = new Serializer(
    "listing_create_operation",
    {
        fee: asset,
        ob_fee: omnibazaar_fee,
        seller: protocol_id_type("account"),
        publisher: protocol_id_type("account"),
        price: asset,
        listing_hash: bytes(32),
        quantity: uint32,
        priority_fee: uint16,
        extensions: set(future_extensions)
    }
);

export const listing_update_operation = new Serializer(
    "listing_update_operation",
    {
        fee: asset,
        ob_fee: omnibazaar_fee,
        seller: protocol_id_type("account"),
        listing_id: protocol_id_type("listing"),
        publisher: optional(protocol_id_type("account")),
        price: optional(asset),
        listing_hash: optional(bytes(32)),
        quantity: optional(uint32),
        update_expiration_time: bool,
        priority_fee: optional(uint16),
        extensions: set(future_extensions)
    }
);

export const listing_delete_operation = new Serializer(
    "listing_delete_operation",
    {
        fee: asset,
        seller: protocol_id_type("account"),
        listing_id: protocol_id_type("listing"),
        extensions: set(future_extensions)
    }
);

export const listing_report_operation = new Serializer(
    "listing_report_operation", {
        fee: asset,
        reporting_account: protocol_id_type("account"),
        listing_id: protocol_id_type("listing"),
        extensions: set(future_extensions)
    }
);

export const escrow_extend_operation = new Serializer(
    "escrow_extend_operation",
    {
        fee: asset,
        fee_paying_account: protocol_id_type("account"),
        escrow: protocol_id_type("escrow"),
        seller_account: protocol_id_type("account"),
        buyer_account: protocol_id_type("account"),
        escrow_account: protocol_id_type("account"),
        expiration_time: time_point_sec,
        memo: optional(memo_data),
        extensions: set(future_extensions)
    }
);

export const verification_operation = new Serializer(
    "verification_operation",
    {
        fee: asset,
        account: protocol_id_type("account"),
        extensions: set(future_extensions)
    }
);

export const exchange_create_operation = new Serializer(
    "exchange_create_operation",
    {
        fee: asset,
        coin_name: string,
        tx_id: string,
        sender: protocol_id_type("account"),
        extensions: set(future_extensions)
    }
);

export const exchange_complete_operation = new Serializer(
    "exchange_complete_operation",
    {
        fee: asset,
        exchange: protocol_id_type("exchange"),
        extensions: set(future_extensions)
    }
);

operation.st_operations = [
    transfer,
    limit_order_create,
    limit_order_cancel,
    call_order_update,
    fill_order,
    account_create,
    account_update,
    account_whitelist,
    account_transfer,
    asset_create,
    asset_update,
    asset_update_bitasset,
    asset_update_feed_producers,
    asset_issue,
    asset_reserve,
    asset_fund_fee_pool,
    asset_settle,
    asset_global_settle,
    asset_publish_feed,
    witness_create,
    witness_update,
    proposal_create,
    proposal_update,
    proposal_delete,
    withdraw_permission_create,
    withdraw_permission_update,
    withdraw_permission_claim,
    withdraw_permission_delete,
    committee_member_create,
    committee_member_update,
    committee_member_update_global_parameters,
    vesting_balance_create,
    vesting_balance_withdraw,
    worker_create,
    custom,
    assert,
    balance_claim,
    override_transfer,
    transfer_to_blind,
    blind_transfer,
    transfer_from_blind,
    asset_settle_cancel,
    asset_claim_fees,
    fba_distribute_operation,
    bid_collateral_operation,
    execute_bid_operation,
    welcome_bonus_operation,
    referral_bonus_operation,
    sale_bonus_operation,
    founder_bonus_operation,
    witness_bonus_operation,
    escrow_create_operation,
    escrow_release_operation,
    escrow_return_operation,
    multisig_transfer_operation,
    listing_create_operation,
    listing_update_operation,
    listing_delete_operation,
    listing_report_operation,
    escrow_extend_operation,
    verification_operation,
    exchange_create_operation,
    exchange_complete_operation
];

export const transaction = new Serializer(
    "transaction",
    {ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions)}
);

export const signed_transaction = new Serializer(
    "signed_transaction",
    {ref_block_num: uint16,
    ref_block_prefix: uint32,
    expiration: time_point_sec,
    operations: array(operation),
    extensions: set(future_extensions),
    signatures: array(bytes(65))}
);
//# -------------------------------
//#  Generated code end
//# -------------------------------

// Custom Types

export const stealth_memo_data = new Serializer(
    "stealth_memo_data", {
    from: optional( public_key ),
    amount: asset,
    blinding_factor: bytes(32),
    commitment: bytes(33),
    check: uint32
})

// var stealth_confirmation = new Serializer(
//     "stealth_confirmation", {
//     one_time_key: public_key,
//     to: optional( public_key ),
//     encrypted_memo: stealth_memo_data
// })
