CREATE TABLE questions (
  id serial PRIMARY KEY,
  question text UNIQUE NOT NULL,
  correctAnswer TEXT NOT NULL,
  incorrectAnswer1 TEXT NOT NULL,
  incorrectAnswer2 TEXT NOT NULL,
  incorrectAnswer3 TEXT NOT NULL
);

INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
  VALUES ('What is best seel Novel of J. K. Rowling','Harry Potter','incorrecta 1','incorrecta 2','incorrecta 3' );

  INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
  VALUES ('Who is the main character in the Disney movie "The Lion King"?', 'Simba', 'Mufasa', 'Timon', 'Pumbaa');

INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
  VALUES ('What is the name of the magical school attended by Harry Potter?', 'Hogwarts', 'Beauxbatons', 'Durmstrang', 'Ilvermorny');

INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
  VALUES ('Who wrote the novel "Pride and Prejudice"?', 'Jane Austen', 'Charlotte Bronte', 'Charles Dickens', 'Emily Bronte');

INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
  VALUES ('In the Disney movie "Aladdin", what is the name of Aladdin’s pet monkey?', 'Abu', 'Iago', 'Rajah', 'Jafar');

INSERT INTO questions (question, correctAnswer, incorrectAnswer1, incorrectAnswer2, incorrectAnswer3)
  VALUES ('What color is the rabbit from the famous children''s story "Alice''s Adventures in Wonderland"?', 'White', 'Brown', 'Black', 'Grey');

  SELECT * FROM questions;
