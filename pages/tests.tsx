import { useSession } from 'next-auth/client';

function ContactForm() {
  const [session, loading] = useSession();

  // 聯繫表單提交處理邏輯
  const handleSubmit = (e) => {
    e.preventDefault();
    // 在這裡使用session.user.email來訪問使用者的郵件地址
    // 進行表單處理或其他操作
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={session.user.email} readOnly />
      {/* 其他表單字段 */}
      <button type="submit">提交</button>
    </form>
  );
}

export default ContactForm;
