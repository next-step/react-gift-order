import { useParams } from 'react-router-dom';

export default function Order() {
  const { id } = useParams();

  return (
    <>
      <div>{id}</div>
    </>

  )
}