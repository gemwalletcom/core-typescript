/*
 Generated by typeshare 1.13.2
*/

export enum Chain {
	Bitcoin = "bitcoin",
	BitcoinCash = "bitcoincash",
	Litecoin = "litecoin",
	Ethereum = "ethereum",
	SmartChain = "smartchain",
	Solana = "solana",
	Polygon = "polygon",
	Thorchain = "thorchain",
	Cosmos = "cosmos",
	Osmosis = "osmosis",
	Arbitrum = "arbitrum",
	Ton = "ton",
	Tron = "tron",
	Doge = "doge",
	Optimism = "optimism",
	Aptos = "aptos",
	Base = "base",
	AvalancheC = "avalanchec",
	Sui = "sui",
	Xrp = "xrp",
	OpBNB = "opbnb",
	Fantom = "fantom",
	Gnosis = "gnosis",
	Celestia = "celestia",
	Injective = "injective",
	Sei = "sei",
	Manta = "manta",
	Blast = "blast",
	Noble = "noble",
	ZkSync = "zksync",
	Linea = "linea",
	Mantle = "mantle",
	Celo = "celo",
	Near = "near",
	World = "world",
	Stellar = "stellar",
	Sonic = "sonic",
	Algorand = "algorand",
	Polkadot = "polkadot",
	Cardano = "cardano",
	Abstract = "abstract",
	Berachain = "berachain",
	Ink = "ink",
	Unichain = "unichain",
	Hyperliquid = "hyperliquid",
	Monad = "monad",
}

export interface Account {
	chain: Chain;
	address: string;
	derivationPath: string;
	extendedPublicKey?: string;
}

export interface AssetId {
	chain: Chain;
	tokenId?: string;
}

export enum AssetType {
	NATIVE = "NATIVE",
	ERC20 = "ERC20",
	BEP20 = "BEP20",
	SPL = "SPL",
	TRC20 = "TRC20",
	TOKEN = "TOKEN",
	IBC = "IBC",
	JETTON = "JETTON",
	SYNTH = "SYNTH",
	ASA = "ASA",
}

export interface Asset {
	id: AssetId;
	name: string;
	symbol: string;
	decimals: number;
	type: AssetType;
}

export interface AssetAddress {
	asset: Asset;
	address: string;
}

export interface AssetProperties {
	isEnabled: boolean;
	isBuyable: boolean;
	isSellable: boolean;
	isSwapable: boolean;
	isStakeable: boolean;
	stakingApr?: number;
}

export interface AssetScore {
	rank: number;
}

export interface AssetBasic {
	asset: Asset;
	properties: AssetProperties;
	score: AssetScore;
}

export interface Balance {
	available: BigInteger;
	frozen: BigInteger;
	locked: BigInteger;
	staked: BigInteger;
	pending: BigInteger;
	rewards: BigInteger;
}

export interface Price {
	price: number;
	priceChangePercentage24h: number;
}

export enum PriceAlertDirection {
	Up = "up",
	Down = "down",
}

export interface PriceAlert {
	assetId: string;
	currency: string;
	price?: number;
	pricePercentChange?: number;
	priceDirection?: PriceAlertDirection;
	lastNotifiedAt?: Date;
}

export interface AssetMetaData {
	isEnabled: boolean;
	isBuyEnabled: boolean;
	isSellEnabled: boolean;
	isSwapEnabled: boolean;
	isStakeEnabled: boolean;
	isPinned: boolean;
	isActive: boolean;
	stakingApr?: number;
}

export interface AssetData {
	asset: Asset;
	balance: Balance;
	account: Account;
	price?: Price;
	price_alerts: PriceAlert[];
	metadata: AssetMetaData;
}

export interface AssetLink {
	name: string;
	url: string;
}

export interface AssetFull {
	asset: Asset;
	properties: AssetProperties;
	score: AssetScore;
	links: AssetLink[];
}

export interface AssetMarket {
	marketCap?: number;
	marketCapFdv?: number;
	marketCapRank?: number;
	totalVolume?: number;
	circulatingSupply?: number;
	totalSupply?: number;
	maxSupply?: number;
}

export interface AssetMarketPrice {
	price?: Price;
	market?: AssetMarket;
}

export interface AssetPrice {
	assetId: string;
	price: number;
	priceChangePercentage24h: number;
}

export interface AssetPrices {
	currency: string;
	prices: AssetPrice[];
}

export interface AssetPricesRequest {
	currency?: string;
	assetIds: string[];
}

export enum WalletType {
	multicoin = "multicoin",
	single = "single",
	private_key = "privateKey",
	view = "view",
}

export interface Wallet {
	id: string;
	name: string;
	index: number;
	type: WalletType;
	accounts: Account[];
	order: number;
	isPinned: boolean;
	imageUrl?: string;
}

export enum BannerEvent {
	Stake = "stake",
	AccountActivation = "accountActivation",
	EnableNotifications = "enableNotifications",
	AccountBlockedMultiSignature = "accountBlockedMultiSignature",
	ActivateAsset = "activateAsset",
}

export enum BannerState {
	Active = "active",
	Cancelled = "cancelled",
	AlwaysActive = "alwaysActive",
}

export interface Banner {
	wallet?: Wallet;
	asset?: Asset;
	chain?: Chain;
	event: BannerEvent;
	state: BannerState;
}

export interface BlockExplorerLink {
	name: string;
	link: string;
}

export enum NodeState {
	Active = "active",
	Inactive = "inactive",
}

export interface Node {
	url: string;
	status: NodeState;
	priority: number;
}

export interface ChainNode {
	chain: string;
	node: Node;
}

export interface ChainNodes {
	chain: string;
	nodes: Node[];
}

export interface ChartValue {
	timestamp: number;
	value: number;
}

export interface Charts {
	price?: Price;
	market?: AssetMarket;
	prices: ChartValue[];
	marketCaps: ChartValue[];
	totalVolumes: ChartValue[];
}

export enum PlatformStore {
	AppStore = "appStore",
	GooglePlay = "googlePlay",
	Fdroid = "fdroid",
	Huawei = "huawei",
	SolanaStore = "solanaStore",
	SamsungStore = "samsungStore",
	ApkUniversal = "apkUniversal",
	Local = "local",
}

export interface Release {
	version: string;
	store: PlatformStore;
	upgradeRequired: boolean;
}

export interface ConfigVersions {
	fiatOnRampAssets: number;
	fiatOffRampAssets: number;
	swapAssets: number;
}

export interface ConfigResponse {
	releases: Release[];
	versions: ConfigVersions;
}

export enum DelegationState {
	Active = "active",
	Pending = "pending",
	Undelegating = "undelegating",
	Inactive = "inactive",
	Activating = "activating",
	Deactivating = "deactivating",
	AwaitingWithdrawal = "awaitingwithdrawal",
}

export interface DelegationBase {
	assetId: AssetId;
	state: DelegationState;
	balance: string;
	shares: string;
	rewards: string;
	completionDate?: Date;
	delegationId: string;
	validatorId: string;
}

export interface DelegationValidator {
	chain: Chain;
	id: string;
	name: string;
	isActive: boolean;
	commision: number;
	apr: number;
}

export interface Delegation {
	base: DelegationBase;
	validator: DelegationValidator;
	price?: Price;
}

export enum Platform {
	IOS = "ios",
	Android = "android",
}

export interface Device {
	id: string;
	platform: Platform;
	platformStore?: PlatformStore;
	token: string;
	locale: string;
	version: string;
	currency: string;
	isPushEnabled: boolean;
	isPriceAlertsEnabled?: boolean;
	subscriptionsVersion: number;
}

export interface EIP712Domain {
	name: string;
	version: string;
	chainId: number;
	verifyingContract: string;
}

export interface EIP712Type {
	name: string;
	type: string;
}

export interface ERC2612Permit {
	owner: string;
	spender: string;
	value: string;
	nonce: string;
	deadline: string;
}

export interface ERC2612Types {
	EIP712Domain: EIP712Type[];
	Permit: EIP712Type[];
}

export interface ERC2612PermitMessage {
	types: ERC2612Types;
	primaryType: string;
	domain: EIP712Domain;
	message: ERC2612Permit;
}

export interface FiatAssets {
	version: number;
	assetIds: string[];
}

export interface FiatProvider {
	id: string;
	name: string;
	imageUrl: string;
}

export enum FiatQuoteType {
	Buy = "buy",
	Sell = "sell",
}

export interface FiatQuote {
	provider: FiatProvider;
	type: FiatQuoteType;
	fiatAmount: number;
	fiatCurrency: string;
	cryptoAmount: number;
	cryptoValue: string;
	redirectUrl: string;
}

export interface FiatQuoteError {
	provider: string;
	error: string;
}

export interface FiatQuoteRequest {
	assetId: string;
	type: FiatQuoteType;
	fiatCurrency: string;
	fiatAmount?: number;
	cryptoValue?: string;
	walletAddress: string;
}

export interface FiatQuotes {
	quotes: FiatQuote[];
}

export interface MarketDominance {
	assetId: string;
	dominance: number;
}

export interface MarketsAssets {
	trending: string[];
	gainers: string[];
	losers: string[];
}

export interface Markets {
	marketCap: number;
	marketCapChangePercentage24h: number;
	assets: MarketsAssets;
	dominance: MarketDominance[];
	totalVolume24h: number;
}

export enum NFTType {
	ERC721 = "erc721",
	ERC1155 = "erc1155",
	SPL = "spl",
	JETTON = "jetton",
}

export interface NFTResource {
	url: string;
	mimeType: string;
}

export interface NFTImages {
	preview: NFTResource;
}

export interface NFTAttribute {
	name: string;
	value: string;
	percentage?: number;
}

export interface NFTAsset {
	id: string;
	collectionId: string;
	contractAddress?: string;
	tokenId: string;
	tokenType: NFTType;
	name: string;
	description?: string;
	chain: Chain;
	resource: NFTResource;
	images: NFTImages;
	attributes: NFTAttribute[];
}

export interface NFTCollection {
	id: string;
	name: string;
	description?: string;
	chain: Chain;
	contractAddress: string;
	images: NFTImages;
	isVerified: boolean;
	links: AssetLink[];
}

export interface NFTAssetData {
	collection: NFTCollection;
	asset: NFTAsset;
}

export interface NFTAssetId {
	chain: Chain;
	contractAddress: string;
	tokenId: string;
}

export interface NFTData {
	collection: NFTCollection;
	assets: NFTAsset[];
}

export interface NFTImageOld {
	imageUrl: string;
	previewImageUrl: string;
	originalSourceUrl: string;
}

export interface NameRecord {
	name: string;
	chain: Chain;
	address: string;
	provider: string;
}

export interface NodesResponse {
	version: number;
	nodes: ChainNodes[];
}

export interface PriceAlertData {
	asset: Asset;
	price?: Price;
	priceAlert: PriceAlert;
}

export interface PriceData {
	asset: Asset;
	price?: Price;
	priceAlerts: PriceAlert[];
	market?: AssetMarket;
	links: AssetLink[];
}

export interface PushNotificationAsset {
	assetId: string;
}

export enum PushNotificationTypes {
	Test = "test",
	Transaction = "transaction",
	Asset = "asset",
	PriceAlert = "priceAlert",
	BuyAsset = "buyAsset",
	SwapAsset = "swapAsset",
}

export interface PushNotificationPayloadType {
	type: PushNotificationTypes;
}

export interface PushNotificationSwapAsset {
	fromAssetId: string;
	toAssetId: string;
}

export interface PushNotificationTransaction {
	walletIndex: number;
	assetId: string;
	transactionId: string;
}

export interface ResponseError {
	error: string;
}

export interface ResponseResult<T> {
	data: T;
	error?: ResponseError;
}

export interface ScanAddressTarget {
	chain: Chain;
	address: string;
}

export interface ScanTransaction {
	isMalicious: boolean;
	isMemoRequired: boolean;
}

export enum TransactionType {
	Transfer = "transfer",
	TransferNFT = "transferNFT",
	Swap = "swap",
	TokenApproval = "tokenApproval",
	StakeDelegate = "stakeDelegate",
	StakeUndelegate = "stakeUndelegate",
	StakeRewards = "stakeRewards",
	StakeRedelegate = "stakeRedelegate",
	StakeWithdraw = "stakeWithdraw",
	AssetActivation = "assetActivation",
	SmartContractCall = "smartContractCall",
}

export interface ScanTransactionPayload {
	deviceId: string;
	walletIndex: number;
	origin: ScanAddressTarget;
	target: ScanAddressTarget;
	website?: string;
	type: TransactionType;
}

export enum SignDigestType {
	Sign = "sign",
	Eip191 = "eip191",
	Eip712 = "eip712",
	Base58 = "base58",
}

export interface SignMessage {
	type: SignDigestType;
	data: Uint8Array;
}

export interface StakeValidator {
	id: string;
	name: string;
}

export interface Subscription {
	wallet_index: number;
	chain: Chain;
	address: string;
}

export enum TransactionState {
	Pending = "pending",
	Confirmed = "confirmed",
	Failed = "failed",
	Reverted = "reverted",
}

export enum TransactionDirection {
	SelfTransfer = "self",
	Outgoing = "outgoing",
	Incoming = "incoming",
}

export interface TransactionInput {
	address: string;
	value: string;
}

export interface Transaction {
	id: string;
	hash: string;
	assetId: AssetId;
	from: string;
	to: string;
	contract?: string;
	type: TransactionType;
	state: TransactionState;
	blockNumber: string;
	sequence: string;
	fee: string;
	feeAssetId: AssetId;
	value: string;
	memo?: string;
	direction: TransactionDirection;
	utxoInputs: TransactionInput[];
	utxoOutputs: TransactionInput[];
	metadata?: string | null;
	createdAt: Date;
}

export interface TransactionExtended {
	transaction: Transaction;
	asset: Asset;
	feeAsset: Asset;
	price?: Price;
	feePrice?: Price;
	assets: Asset[];
	prices: AssetPrice[];
}

export interface TransactionNFTTransferMetadata {
	assetId: string;
}

export interface TransactionSwapMetadata {
	fromAsset: AssetId;
	fromValue: string;
	toAsset: AssetId;
	toValue: string;
}

export interface TransactionsFetchOption {
	wallet_index: number;
	asset_id?: string;
	from_timestamp?: number;
}

export interface UTXO {
	transaction_id: string;
	vout: number;
	value: string;
	address: string;
}

export interface WCEthereumTransaction {
	chainId?: string;
	from: string;
	to: string;
	value?: string;
	gas?: string;
	gasLimit?: string;
	gasPrice?: string;
	maxFeePerGas?: string;
	maxPriorityFeePerGas?: string;
	nonce?: string;
	data?: string;
}

export interface WCSolanaSignMessage {
	message: string;
	pubkey: string;
}

export interface WCSolanaSignMessageResult {
	signature: string;
}

export interface WCSolanaTransaction {
	transaction: string;
}

export enum WalletConnectionState {
	Started = "started",
	Active = "active",
	Expired = "expired",
}

export interface WalletConnectionSessionAppMetadata {
	name: string;
	description: string;
	url: string;
	icon: string;
	redirectNative?: string;
	redirectUniversal?: string;
}

export interface WalletConnectionSession {
	id: string;
	sessionId: string;
	state: WalletConnectionState;
	chains: Chain[];
	createdAt: Date;
	expireAt: Date;
	metadata: WalletConnectionSessionAppMetadata;
}

export interface WalletConnection {
	session: WalletConnectionSession;
	wallet: Wallet;
}

export interface WalletConnectionSessionProposal {
	defaultWallet: Wallet;
	wallets: Wallet[];
	metadata: WalletConnectionSessionAppMetadata;
}

export interface WalletId {
	id: string;
}

export enum AssetRank {
	High = "high",
	Medium = "medium",
	Low = "low",
	Trivial = "trivial",
	Unknown = "unknown",
	Inactive = "inactive",
	Abandoned = "abandoned",
	Suspended = "suspended",
	Migrated = "migrated",
	Deprecated = "deprecated",
	Spam = "spam",
	Fradulent = "fradulent",
}

export enum AssetSubtype {
	NATIVE = "NATIVE",
	TOKEN = "TOKEN",
}

export enum AssetTag {
	Trending = "trending",
	TrendingFiatPurchase = "trending_fiat_purchase",
	Gainers = "gainers",
	Losers = "losers",
	New = "new",
	Stablecoins = "stablecoins",
}

export enum BalanceType {
	available = "available",
	locked = "locked",
	frozen = "frozen",
	staked = "staked",
	pending = "pending",
	rewards = "rewards",
	reserved = "reserved",
}

export enum BitcoinChain {
	Bitcoin = "bitcoin",
	BitcoinCash = "bitcoincash",
	Litecoin = "litecoin",
	Doge = "doge",
}

export enum ChainType {
	Ethereum = "ethereum",
	Bitcoin = "bitcoin",
	Solana = "solana",
	Cosmos = "cosmos",
	Ton = "ton",
	Tron = "tron",
	Aptos = "aptos",
	Sui = "sui",
	Xrp = "xrp",
	Near = "near",
	Stellar = "stellar",
	Algorand = "algorand",
	Polkadot = "polkadot",
	Cardano = "cardano",
}

export enum ChartPeriod {
	Hour = "hour",
	Day = "day",
	Week = "week",
	Month = "month",
	Quarter = "quarter",
	Year = "year",
	All = "all",
}

export enum CosmosChain {
	Cosmos = "cosmos",
	Osmosis = "osmosis",
	Celestia = "celestia",
	Thorchain = "thorchain",
	Injective = "injective",
	Sei = "sei",
	Noble = "noble",
}

export enum CosmosDenom {
	Rune = "rune",
	Uatom = "uatom",
	Uosmo = "uosmo",
	Utia = "utia",
	Inj = "inj",
	Usei = "usei",
	Uusdc = "uusdc",
}

export enum Currency {
	MXN = "MXN",
	CHF = "CHF",
	CNY = "CNY",
	THB = "THB",
	HUF = "HUF",
	AUD = "AUD",
	IDR = "IDR",
	RUB = "RUB",
	ZAR = "ZAR",
	EUR = "EUR",
	NZD = "NZD",
	SAR = "SAR",
	SGD = "SGD",
	BMD = "BMD",
	KWD = "KWD",
	HKD = "HKD",
	JPY = "JPY",
	GBP = "GBP",
	DKK = "DKK",
	KRW = "KRW",
	PHP = "PHP",
	CLP = "CLP",
	TWD = "TWD",
	PKR = "PKR",
	BRL = "BRL",
	CAD = "CAD",
	BHD = "BHD",
	MMK = "MMK",
	VEF = "VEF",
	VND = "VND",
	CZK = "CZK",
	TRY = "TRY",
	INR = "INR",
	ARS = "ARS",
	BDT = "BDT",
	NOK = "NOK",
	USD = "USD",
	LKR = "LKR",
	ILS = "ILS",
	PLN = "PLN",
	NGN = "NGN",
	UAH = "UAH",
	XDR = "XDR",
	MYR = "MYR",
	AED = "AED",
	SEK = "SEK",
}

export enum EVMChain {
	Ethereum = "ethereum",
	SmartChain = "smartchain",
	Polygon = "polygon",
	Arbitrum = "arbitrum",
	Optimism = "optimism",
	Base = "base",
	AvalancheC = "avalanchec",
	OpBNB = "opbnb",
	Fantom = "fantom",
	Gnosis = "gnosis",
	Manta = "manta",
	Blast = "blast",
	ZkSync = "zksync",
	Linea = "linea",
	Mantle = "mantle",
	Celo = "celo",
	World = "world",
	Sonic = "sonic",
	Abstract = "abstract",
	Berachain = "berachain",
	Ink = "ink",
	Unichain = "unichain",
	Hyperliquid = "hyperliquid",
	Monad = "monad",
}

export enum EncodingType {
	Hex = "Hex",
	Base58 = "Base58",
}

export enum FeePriority {
	Slow = "slow",
	Normal = "normal",
	Fast = "fast",
}

export enum FeeUnitType {
	SatVb = "satVb",
	Gwei = "gwei",
	Native = "native",
}

export enum LinkType {
	X = "x",
	Discord = "discord",
	Reddit = "reddit",
	Telegram = "telegram",
	GitHub = "github",
	YouTube = "youtube",
	Facebook = "facebook",
	Website = "website",
	Coingecko = "coingecko",
	OpenSea = "opensea",
	Instagram = "instagram",
	MagicEden = "magiceden",
	CoinMarketCap = "coinmarketcap",
	TikTok = "tiktok",
}

export enum NameProvider {
	Ud = "ud",
	Ens = "ens",
	Sns = "sns",
	Ton = "ton",
	Tree = "tree",
	Spaceid = "spaceid",
	Eths = "eths",
	Did = "did",
	Suins = "suins",
	Aptos = "aptos",
	Injective = "injective",
	Icns = "icns",
	Lens = "lens",
	Bns = "bns",
}

export enum PriceAlertNotificationType {
	Auto = "Auto",
	Price = "Price",
	PricePercentChange = "PricePercentChange",
}

export enum SolanaTokenProgramId {
	Token = "token",
	Token2022 = "token2022",
}

export enum StakeChain {
	Cosmos = "cosmos",
	Osmosis = "osmosis",
	Injective = "injective",
	Sei = "sei",
	Celestia = "celestia",
	Solana = "solana",
	Sui = "sui",
	SmartChain = "smartchain",
	Tron = "tron",
}

export enum WalletConnectCAIP2 {
	Eip155 = "eip155",
	Solana = "solana",
	Cosmos = "cosmos",
	Algorand = "algorand",
}

export enum WalletConnectionEvents {
	connect = "connect",
	disconnect = "disconnect",
	accounts_changed = "accountsChanged",
	chain_changed = "chainChanged",
}

export enum WalletConnectionMethods {
	eth_chain_id = "eth_chainId",
	eth_sign = "eth_sign",
	personal_sign = "personal_sign",
	eth_sign_typed_data = "eth_signTypedData",
	eth_sign_typed_data_v4 = "eth_signTypedData_v4",
	eth_sign_transaction = "eth_signTransaction",
	eth_send_transaction = "eth_sendTransaction",
	eth_send_raw_transaction = "eth_sendRawTransaction",
	wallet_switch_ethereum_chain = "wallet_switchEthereumChain",
	wallet_add_ethereum_chain = "wallet_addEthereumChain",
	solana_sign_message = "solana_signMessage",
	solana_sign_transaction = "solana_signTransaction",
	solana_sign_and_send_transaction = "solana_signAndSendTransaction",
}

