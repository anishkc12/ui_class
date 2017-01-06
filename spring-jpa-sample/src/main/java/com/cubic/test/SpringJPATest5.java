package com.cubic.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.service.TransactionParent;

public class SpringJPATest5 {

	public static void main(String[] args) throws Exception {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringJPA.xml");
		TransactionParent tp = context.getBean(TransactionParent.class);
		tp.methodRequired();
		// tp.methodMandatory();

	}

}
