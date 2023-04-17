var brokerDomain = {
	wl1: "pademo.fintechee.cloud"
}

var brokerPort = {
	wl1: ""
}

var brokerProtocol = {
	wl1: "https://"
}

var shopDomain = {
	wl1: "fintechee.shop"
}

var brokerName = {
	wl1: "pademo"
}

var signInShownBrokerName = {
	wl1: "Palm Demo Server"
}

var shownBrokerName = {
	wl1: "Palm Demo"
}

var brokerCtx = []

brokerCtx[brokerName.wl1] = {
	brokerName: brokerName.wl1,
	dataStreamURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	dataBaseURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	orderStreamURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	orderBaseURL: brokerProtocol.wl1 + brokerDomain.wl1 + brokerPort.wl1,
	shopURL: brokerProtocol.wl1 + shopDomain.wl1,
	logoURL: "/images/logo.png",
	syncServerSettingStatus: false,
	defaultSymbolNames: [
		"EUR/USD"
	],
	desc: "Palm Demo",
	startEndHour: 22,
	swapCalcHour: 22,
	pendingOdrsOpenTrdsNumLimit: 100,
	demoMode: true,
	currency: "USD",
	lotsUnit: 100000,
	toFixed: 100,
	commentLengthLimit: 50,
	lotsPerOrder: 0.01,
	externalData: false,
	externalURL: null,
	externalTk: null,
	externalMode: 0,
	spreadBetting: false,
	brokerless: false,
	creditsOnboard: false
}

var BROKER_NAME = {
  DEMO: "Fintechee Demo",
	FINTECHEE_DEMO: "Fintechee Demo",
	WL1: shownBrokerName.wl1
}
