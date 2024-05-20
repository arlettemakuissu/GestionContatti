package com.example.demo.Gestion_contatti_cleinti_dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Login_dto {
	
	private Long id;
	private String nome;
	private String cognome;
	private String email;
	private String tipo;

}
