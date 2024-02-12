import { LETTERS } from '@/const'

interface LetterProps {
  changeLetter: (letter: string) => void
}

export default function Letters({ changeLetter }: LetterProps) {
  return (
    <div className='hidden sm:flex'>
      {LETTERS.map((letter, index) => (
        <div
          className='ml-1 flex gap-1 md:ml-[6px] md:gap-[6px] lg:ml-2 lg:gap-2'
          key={index}
        >
          <span
            className='text-bold cursor-pointer text-[#d57d1f]'
            key={letter}
            onClick={() => {
              changeLetter(letter)
            }}
          >
            {letter}
          </span>
          {index < LETTERS.length - 1 && <span className='text-black'>/</span>}
        </div>
      ))}
    </div>
  )
}
