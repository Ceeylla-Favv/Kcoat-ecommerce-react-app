import React from 'react';
import styles from './style.module.css';

class SubscriptionCard extends React.Component {
  render() {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.subscriptionDetails}>
          <h2>Subscribe to Our Newletter</h2>
          <p>Stay updated with latest information on trend, sales and arrival. </p>
        </div>
        <div className={styles.subscriptionForm}>
          <form>
            
            <input type="text" id="address" name="address"  placeholder='Email Address'/>
            <button type="submit">Subscribe</button><br/>
            <div className={styles.privacy}>
              <input className={styles.check} type="checkbox" />
              <p>Terms & Conditions and privacy& Cookies policy</p>
            </div>
          </form>
        
        </div>
      </div>
    );
  }
}

export default SubscriptionCard;
