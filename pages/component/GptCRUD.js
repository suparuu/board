// pages/board.js

import pool from '../../data/gptTest';

export default function GptCRUD ({ posts }) {
  return (
    <div>
      <h1>게시판</h1>
      <ul>
        {posts && posts.map((post) => {
            console.log(post, '??')
            return(
          <li key={post.id}>
            {post.title}: {post.content}
          </li>
            )
        })}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const [rows] = await pool.query('select * from test');
    console.log('데이터 가져오기 성공 ' , rows)
    return {
      props: {
        posts: rows,
      },
    };
  } catch (error) {
    console.error('못가져옴 ㅋㅋ ', error);
    return {
      props: {
        posts: [],
      },
    };
  }
}
