'use client'
export default function Home() {
  return (
    <>
      <textarea name="input-field" id="input-field"></textarea>
      <button 
        type="button"
        onClick={() => console.log('hhh')}
        >音声出力</button>
    </>
  );
}
