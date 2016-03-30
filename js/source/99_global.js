var PrivKey = "";
var decryptType = "";
var usdval;
var eurval;
var btcval;
(function($) {
	$.fn.extend({
		isChildOf: function(filter) {
			return $(filter).find(this).length > 0;
		}
	});
})(jQuery);
$(document).ready(function() {
	bindElements();
	buttonBinder();
	checkAndLoadPageHash();
	checkAndRedirectHTTPS();
    if($('.digixSale').length)
        bindDigixElements();
});

function buttonBinder() {
	$('.btnAction').each(function(i, obj) {
		$(obj).unbind().bind("click", window[$(obj).attr('func')]);
	});
}

function checkAndRedirectHTTPS() {
	var host = "myetherwallet.com";
	var githost = "kvhnuke.github.io";
	var githostw = "www.kvhnuke.github.io";
	var hostw = "www.myetherwallet.com";
	if ((host == window.location.host || githost == window.location.host || hostw == window.location.host || githostw == window.location.host) && (window.location.protocol != "https:")) window.location.protocol = "https";
}

function checkAndLoadPageHash() {
	if (window.location.hash) {
		var phash = window.location.hash.substr(1);
		$(".ptabs").each(function(index) {
			if ($(this).attr('id') == phash) {
				$(this).click();
				setTimeout(function() {
					$('html,body').scrollTop(0);
				}, 50);
				return;
			}
		});
	}
}

function onTabOpen(tabid) {
	if (tabid == 'send-transaction') {
		onSendTransactionOpens();
	} else if (tabid == 'view-wallet-info') {
		onViewWalletOpens();
	} else if (tabid == 'offline-transaction') {
		onOfflineTxOpens();
	}
}

function paneNavigate(showEleId, activeEleId) {
	hideAllMainContainers();
	$("#" + showEleId).show();
	$("#" + activeEleId).parent().addClass('active');
	location.hash = activeEleId;
	onTabOpen(activeEleId);
	$('html,body').scrollTop(0);
}

function bindElements() {
	$(".ptabs").each(function(index) {
		$(this).click(function() {
			paneNavigate($(this).attr('showId'), this.id);
		});
	});
}

function resetDecryptValues() {
	$('#fuploadStatus').empty();
	$('#walletfilepassword').val('');
	$('#privkeypassword').val('');
	$('.btn-file :file').val('');
	$('#manualprivkey').val('');
	$("#walletuploadbutton").hide();
	$("#walletPasdiv").hide();
	$("#divprikeypassword").hide();
	$("#wallettransactions").hide();
	$("#decryptStatus").hide();
	$("#selectedTypeKey").hide();
	$("#privkeyViewW").val('');
	$("#qrcodeViewW").empty();
}

function hideAllMainContainers() {
    PrivKey = "";
	$("#paneWalgen").hide();
	$("#paneBulkgen").hide();
	$("#paneViewWalletDetails").hide();
	$("#paneSendTrans").hide();
	$("#paneOfflineTrans").hide();
	$("#paneHelp").hide();
	$("#paneContact").hide();
	$("#panePrint").hide();
	$("#privkeyViewW").val('');
	$("#decryptedWalletDetails").hide();
	$("#qrcodeViewW").empty();
	$("#bulk-generate").parent().removeClass('active');
	$("#generate-wallet").parent().removeClass('active');
	$("#view-wallet-info").parent().removeClass('active');
	$("#send-transaction").parent().removeClass('active');
	$("#offline-transaction").parent().removeClass('active');
	$("#offline-transaction").parent().removeClass('active');
	$("#help").parent().removeClass('active');
	$("#contact").parent().removeClass('active');
}

$(document).ready(function() {
	// collapsing elements on offline tx and help
	$(".collapsePanel.collapsed").slideUp();
	$(".collapseButton").click(function() {
		var collapseButton = $(this);
		var collapseContainer = $(this).parents(".collapseContainer");
		var collapsePanel = collapseContainer.children( ".collapsePanel" );
		collapsePanel.slideToggle();
		if ( collapseButton.html() == "-") {
			collapseButton.html("+");
		} else {
			collapseButton.html("-");
		}
	});

	// ontap hovers
	$(".account-help-icon").click(function() {
		$(this).children( ".account-help-text" ).toggle();
	});
});
