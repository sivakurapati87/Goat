package com.intuiture.goat.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class ItemController {// Serves Data.

	@RequestMapping("/categories")
	public @ResponseBody List listAllCategories() {
		System.out.println("*************************************ListAllItems");
		List<String> list = new ArrayList<String>();
		list.add("siva");
		return list;
	}

}
