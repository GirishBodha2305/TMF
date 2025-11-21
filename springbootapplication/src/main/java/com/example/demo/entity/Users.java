package com.example.demo.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
//import lombok.*;



//@Data
//@NoArgsConstructor
//@AllArgsConstructor
@Entity
public class Users {

	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private Long uid;
	private String username;
	@Column(unique = true)
    private String email;
	private String password;
	public Long getUid() {
		return uid;
	}
	public void setUid(Long uid) {
		this.uid = uid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public Users(Long uid, String username, String email, String password) {
		super();
		this.uid = uid;
		this.username = username;
		this.email = email;
		this.password = password;
	}
	public Users() {
		super();
		// TODO Auto-generated constructor stub
	}
	@Override
	public String toString() {
		return "Users [uid=" + uid + ", username=" + username + ", email=" + email + ", password=" + password + "]";
	}
	
	
	
	
	
	
	
	
}
