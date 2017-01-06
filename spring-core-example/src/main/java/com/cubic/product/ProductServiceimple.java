package com.cubic.product;

import com.cubic.spring.ProductVO;

public class ProductServiceimple extends AbstractService implements ProductService {
	


	public ProductVO save(ProductVO input){
		input.setManufacture(this.getDefaultManuf());
		input.setVersion(this.getDefaultVersion());
		input.setProductId(System.currentTimeMillis());
		this.getNotifyService().notify(input);
		return input;
	}

}
