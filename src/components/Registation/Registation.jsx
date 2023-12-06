
import "./Registation.scss"

const Registation = () => {
  return (
    <>
      <div className="registation">
        <div className="container regsis-container">
          <div className="resistation-content">
            <h1> হ্যান্ড হোল্ডিং সাপোর্ট সিজন-৯  <span> রেজিস্ট্রেশন শুরু চলছে... </span> </h1>
            <p> বিস্তারিত জানতে এবং রেজিস্ট্রেশন করতে পাশে দেওয়া ফর্মটি পূরণ করুন। আমাদের সাপোর্ট স্টাফ খুব শীঘ্রই আপনাদের কল করবে </p>
            <div className="counter">
              <div className="count">   
                <h2> 00 </h2>
                <p> DAYS </p>
              </div>
              <div className="count">
                <h2> 00 </h2>
                <p> HOURS </p>
              </div>
              <div className="count">
                <h2> 00 </h2>
                <p> MINUTES</p>
              </div>
              <div className="count-abc">
                <h2 className="last-count"> 00 </h2>
                <p> SECONDS
</p>
              </div>
            </div>
          </div>
          <div className="resistation-image">
            <img src="https://sorobindu.com/wp-content/uploads/2023/05/website-image.png" alt="" />
          </div>

          <div className="resistation-form">
            <div className="reg-form">
              <h5> পরামর্শ এবং সকল ধরনের আপডেট পেতে </h5>
              <form action="">
                <input type="text"  placeholder="আপনার নাম"/>
                <input type="text"  placeholder="মোবাইল নাম্বার"/>
                <input type="text"  placeholder="আপনার ইমেইল"/>
                <button > সাবমিট করুন </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Registation;














