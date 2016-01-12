package com.intuiture.goat.util;

import java.text.SimpleDateFormat;
import java.util.Date;

import org.apache.log4j.Logger;

public class TransformDomainToJson {
	private static Logger LOG = Logger.getLogger(TransformDomainToJson.class);
	private static SimpleDateFormat sdf = new SimpleDateFormat("dd-MMM-yyyy");

	public static Date convertStringToDate(String strDate) {
		Date date = null;
		try {
			if (strDate != null && strDate.trim().length() > 0) {
				date = sdf.parse(strDate);
			}

		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(
					"Error at convertStringToDate() in TransformDomainToJson:"
							+ e.getMessage(), e);
		}
		return date;
	}

	/**
	 * This method is to convert Date to String
	 * 
	 * @param date
	 * @return
	 */
	public static String convertDateToString(Date date) {
		String strDate = null;
		try {
			if (date != null) {
				strDate = sdf.format(date);
			}

		} catch (Exception e) {
			e.printStackTrace();
			LOG.error(
					"Error at convertDateToString() in TransformDomainToJson:"
							+ e.getMessage(), e);
		}
		return strDate;
	}

}
