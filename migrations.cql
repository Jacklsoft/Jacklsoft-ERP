--bafc79d210e9475a7a5b07922c57e3ec24c1bf66

CREATE TABLE asiento(
	asiento timeuuid,
	cuenta text,
	debe decimal,
	haber decimal,

	PRIMARY KEY(asiento, cuenta)
);

