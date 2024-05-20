package com.example.demo.Gestion_contatti_cleinti_dto;



import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Contatti_dto {
	
	
	private Long clientId;
	private String nome;
	private String cognome;
	private String cat;
	private String tel;

}
