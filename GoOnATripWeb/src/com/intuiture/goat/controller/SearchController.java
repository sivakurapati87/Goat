package com.intuiture.goat.controller;

import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.intuiture.goat.bean.SearchBean;

@Controller
@RequestMapping("/SearchController")
public class SearchController {// Serves Data.

	@RequestMapping(value = "/searchAction", method = RequestMethod.POST)
	public ResponseEntity<Void> createUser(@RequestBody SearchBean user) {

		HttpHeaders headers = new HttpHeaders();
		return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
	}

}
