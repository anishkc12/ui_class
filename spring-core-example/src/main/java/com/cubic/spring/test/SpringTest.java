package com.cubic.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.spring.ProductVO;

public class SpringTest {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringContext.xml");
		ProductVO obj = context.getBean("myProduct",ProductVO.class);
		obj.setProductName("My Laptop");
		
		ProductVO secondobject = context.getBean("productObj",ProductVO.class);
				System.out.println("Object: " +obj);
				System.out.println("Second Object: " + secondobject);
				
	
	}

}
