import './App.css';

function App() {
  const fontSize = {fontSize: '40px', color: 'darkblue', textShadow: '5px 5px 10px'}
  return (
    <div className="App">
      <h1 style={fontSize}>Hello</h1>
      <article style={{fontSize: '20px'}} className='blog'>
        Hey there, this is a blog written by Riyad Hossain.
        <p style={{fontWeight: '400'}}>This is a Paragraph</p>
      </article>

      <Blog head="This is my Favourite➡️ Quote." author="I"></Blog>
      <Blog head="This is my Special↗️ Quote." author="Me"></Blog>
      <Blog head="This is my Chosen🏹 Quote." author="Mine"></Blog>
    </div>
  );
}

const Blog = (props) => {
  return (
    <div>
      <span><h3>{props.head}</h3> - {props.author}</span>
    </div>
  )
}

export default App;


/* ১. তুমি create react app দিয়ে রিএক্ট এর প্রজেক্ট বানাতে পারো কিনা✅ */ 

/* ২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা✅ */ 

/* ৩. তুমি css ক্লাস লিখবে যেটার নাম হবে blog তারপর তোমার JSX এর মধ্যে গিয়ে article ট্যাগ এর মধ্যে blog ক্লাস যোগ করবে।✅  */

/* ৪. তুমি জাভাস্ক্রিপ্ট অবজেক্ট দিয়ে স্টাইল article ট্যাগ এর মধ্যে একটা h2 এর মধ্যে কিছু স্টাইল দাও। মিনিমাম ৩টা স্টাইল দিব।✅ */ 

/* ৫. article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো।✅ */ 

/* ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও✅ */

/* ৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে।✅  */

/* ৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে। এবং সেই প্রপার্টিগুলো দেখাবে।✅  */


/* ৯. আরেকটা কম্পোনেন্ট বানাও। যেটার নাম হবে। Mobile সেখানে একটা বাটন থাকবে। বাটন এর নাম হবে "battery down" আর উপরে একটা সংখ্যা থাকবে। ১০০। (এইটা দিয়ে বুঝবে মোবাইল এর ব্যাটারি ১০০% আছে) এখন তুমি যতবার বাটনে ক্লিক করবে। সেই সংখ্যা এর মান ১০ করে কমতে থাকবে।  */

/* ১০. (স্পেশাল চ্যালেঞ্জ) উপরের ব্যাটারী ডাউন বাটনে চাপ দিলে কমবে। তবে কমতে কমতে যখন ব্যাটারি এর পরিমাণ ০ হয়ে যাবে। তারপরে আর বাটনে চাপ দিলে। ব্যাটারি কমবে না। অর্থাৎ নেগেটিভ হবে না। (দেখো এইটা করতে পারো কিনা) */

/* ১১. json placeholder এর ওয়েবসাইট এ গিয়ে todo এর ডাটা লোড করে। সেগুলাকে দেখাতে পারো কিনা দেখো। */