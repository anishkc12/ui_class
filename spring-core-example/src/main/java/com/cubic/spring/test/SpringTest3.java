package com.cubic.spring.test;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.cubic.product.ProductService;
import com.cubic.product.ProductServiceimple;
import com.cubic.spring.ProductVO;
import com.cubic.spring.SpringFactory;

public class SpringTest3 {

	public static void main(String[] args) {
		//ApplicationContext context = new ClassPathXmlApplicationContext("SpringContext.xml");
		ProductVO vo = createProduct();
	
		ProductService ps = SpringFactory.getInstance().getBean("productsServiceWalmart",ProductService.class);
		ProductVO result =ps.save(vo);
		System.out.println(result);
		
		vo =createProduct();
		ProductService psTarget = SpringFactory.getInstance().getBean("productsServiceTarget",ProductService.class);
		result =psTarget.save(vo);
		System.out.println(result);

	}

	private static ProductVO createProduct() {
		ProductVO vo = new ProductVO();
		vo.setProductName("Samsung S plus");
		return vo;
	}
	


}
