import { useState, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

interface QuillEditorProps {
  onContentChange: (content: string) => void;
}

const QuillEditor: React.FC<QuillEditorProps> = ({ onContentChange }) => {
  const [text, setText] = useState("");
  const QuillRef = useRef<ReactQuill | null>(null);

  const modules = {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
    ],
  };

  const formats = [
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  const handleChange = (value: string) => {
    setText(value);
    // 부모 컴포넌트로 사용자가 작성한 내용을 전달합니다.
    onContentChange(value);
  };


  return (
    <div>
      <ReactQuill
        ref={(el) => QuillRef.current = el}
        value={text}
        onChange={handleChange}
        modules={modules}
        formats={formats}
        theme="snow"
      />
    </div>
  );
};

export default QuillEditor;

