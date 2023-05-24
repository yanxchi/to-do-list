import React, { useRef, useState } from 'react';
import { Diary } from '../model';
import './styles.css';

const CreateDiarypage = () => {

  const [diary, setDiary] = useState<string>('');
  const [diaries, setDiaries] = useState<Diary[]>([]); // Initialize with an empty array
  const handleAdd = (e: React.FormEvent) => {
    setDiaries([
      ...diaries,
      { id: Date.now(), content: diary, time: Date.now() },
    ]);
    setDiary('');
  };
  const handleSubmit = (e: React.FormEvent) => {
      console.log(diary)
    if (diary.length <= 0) {
      e.preventDefault();
      alert('You cannot submit a diary of 0 character. Please try again. ');
      setDiary('');
      inputRef.current?.blur();
    } else {
      e.preventDefault();
      handleAdd(e);
      inputRef.current?.blur();
      setDiary('');
    }
  };
  const inputRef = useRef<HTMLTextAreaElement>(null);
  return (
    <div>
      <h2 className="create-diary-heading">New Entry</h2>
      <form className="input" onSubmit={handleSubmit}>
      <textarea
          value={diary}
          onChange={(e) => setDiary(e.currentTarget.value)}
          placeholder="Pen down your thoughts!"
          ref={inputRef}
          className="input__box"
          rows={1}
        />
        <button className="input__submit" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateDiarypage;
