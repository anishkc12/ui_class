package com.cubic.spring;

public class ProductVO {
	private String productName;
	private String productDesc;
	private String manufacture;
	private String version;
	private Long productId;
	
	public ProductVO(){
		
	}
	
	public ProductVO(String productName, Long productId) {
		super();
		this.productName = productName;
		this.productId = productId;
	}
	public ProductVO(String productName, String manufacture) {
		super();
		this.productName = productName;
		this.manufacture = manufacture;
	}

	public ProductVO(String productName, String manufacture, String version) {
		super();
		this.productName = productName;
		this.manufacture = manufacture;
		this.version = version;
	}

	

	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public String getManufacture() {
		return manufacture;
	}
	public void setManufacture(String manufacture) {
		this.manufacture = manufacture;
	}
	
	
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	
	
	public String getVersion() {
		return version;
	}
	public void setVersion(String version) {
		this.version = version;
	}
	@Override
	public String toString() {
		return "ProductVO [productName=" + productName + ", productDesc=" + productDesc + ", manufacture=" + manufacture
				+ ", version=" + version + ", productId=" + productId + "]";
	}

}

