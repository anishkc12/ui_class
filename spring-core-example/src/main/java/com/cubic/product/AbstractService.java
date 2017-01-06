package com.cubic.product;

import com.cubic.notify.NotifyService;

public abstract class AbstractService {

	private String defaultManuf;
	private String defaultVersion;
	private NotifyService notifyService;
	public NotifyService getNotifyService() {
		return notifyService;
	}
	public void setNotifyService(NotifyService notifyService) {
		this.notifyService = notifyService;
	}
	public String getDefaultManuf() {
		return defaultManuf;
	}
	public void setDefaultManuf(String defaultManuf) {
		this.defaultManuf = defaultManuf;
	}
	public String getDefaultVersion() {
		return defaultVersion;
	}
	public void setDefaultVersion(String defaultVersion) {
		this.defaultVersion = defaultVersion;
	}
	@Override
	public String toString() {
		return "AbstractService [defaultManuf=" + defaultManuf + ", defaultVersion=" + defaultVersion
				+ ", notifyService=" + notifyService + "]";
	}

}
