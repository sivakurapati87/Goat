package com.intuiture.goat.bean;

public class SearchBean {
	private String from;
	private String to;
	private String date;
	private Boolean isSearchDisabled;

	public String getFrom() {
		return from;
	}

	public void setFrom(String from) {
		this.from = from;
	}

	public String getTo() {
		return to;
	}

	public void setTo(String to) {
		this.to = to;
	}

	public String getDate() {
		return date;
	}

	public void setDate(String date) {
		this.date = date;
	}

	public Boolean getIsSearchDisabled() {
		return isSearchDisabled;
	}

	public void setIsSearchDisabled(Boolean isSearchDisabled) {
		this.isSearchDisabled = isSearchDisabled;
	}

}
