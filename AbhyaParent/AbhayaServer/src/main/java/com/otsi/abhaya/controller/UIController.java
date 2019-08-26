package com.otsi.abhaya.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class UIController {

	@GetMapping
	@RequestMapping({ "/", "/login", "/dashboard/**", "/vehicles/**",
		"/drivers/**", "/trip/**", "/devices/**", "/reports/**", "/users/**"})
	public String home(Model model) {
		System.out.println("Welcome to Abhaya......");
		return "forward:/index.html";
	}

}
