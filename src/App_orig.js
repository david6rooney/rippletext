import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>One Positive Text</h1>
      </header>
      <div id="body">
        <div>
          <h2>Why we're different</h2>
          <p>
            David Rooney, the visionary behind One Positive Text, consistently
            sensed the growing challenge of discovering uplifting news. Have you
            ever tuned in to your local news and been greeted by a barrage of
            crime reports, impending natural disasters, or interstate accidents?
            Perhaps you lean toward larger media channels where political
            scandals, economic woes, and global tensions dominate the headlines.
            The constant inundation with such disheartening content can be
            overwhelming. We crave a reprieve from the incessant grind of
            negativity that pervades much of today's news. What we truly need is
            a dose of good news.
          </p>
          <p>
            We don't aim to divert your attention from staying informed about
            important local and global issues—we recognize the significance of
            staying abreast of such matters. Our goal is simply to gently nudge
            you, amidst the current of news, to acknowledge that there are
            wonderful occurrences in the world. These positive narratives have
            the power to bring a smile to your face, cultivate empathy, and
            serve as a wellspring of inspiration and motivation. Our commitment
            is not to overwhelm you; instead, we'll delicately curate and share
            just one uplifting story each day.
          </p>
        </div>
        <div>
          <h2>Sign Up Here</h2>
          <p>
            Subscription is only $2 per month.
            <br />
            Receive one text message a day.
            <br />
            Schedule it to send every morning at 8AM.
          </p>
          <form>
            <label>
              First Name:
              <input type="text" name="firstname" />
            </label>
            <label>
              Last Name:
              <input type="text" name="lastname" />
            </label>
            <label>
              Phone:
              <input type="text" name="phone" />
            </label>
            <input type="submit" value="Continue to Secure Payment" />
          </form>
        </div>
        <div>
          <h2>Contact Us</h2>
          
        </div>
      </div>
    </div>
  );
}

export default App;
