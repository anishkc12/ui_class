package com.cubic.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.service.CustomerService;

public class SpringJPATest3 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringJPA.xml");
		CustomerService cs = context.getBean(CustomerService.class);

		cs.removeCustomer(new Long(1061));

	}

}
