'use client';
import { useEffect, useState } from 'react';
import '../atoms/quiz.css'

type Question = {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
};

const Quizzes: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await fetch('https://opentdb.com/browse.php');
        const data = await response.json();
        setQuestions(data.results);
      } catch (error) {
        console.error('Error fetching questions:', error);
        setError('Failed to load quizzes');
      }
    };

    fetchQuestions();
  }, []);

  return (
    <div className='container'>
      <h1>Other Quizzes</h1>
      {error && <p>{error}</p>}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {questions.map((question, index) => (
          <div
            key={index}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '16px',
              width: '250px',
            }}
          >
            <h2>{question.category}</h2>
            <p><strong>Difficulty:</strong> {question.difficulty}</p>
            <p>{question.question}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quizzes;