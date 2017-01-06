package com.cubic.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.product.ProductService;
import com.cubic.product.ProductServiceimple;
import com.cubic.spring.ProductVO;

public class SpringTest2 {

	public static void main(String[] args) {
		ApplicationContext context = new ClassPathXmlApplicationContext("SpringContext.xml");
		ProductVO vo = new ProductVO();
		vo.setProductName("Samsung S plus");
		ProductService ps = context.getBean(ProductService.class);
		
		ProductVO result =ps.save(vo);
		System.out.println(result);;
	
				
	
	}

}
