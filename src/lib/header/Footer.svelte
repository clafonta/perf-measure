<script lang="ts">
    import LayoutGrid, {Cell} from '@smui/layout-grid';
    import Icon from '@smui/textfield/icon';
    import FormField from '@smui/form-field';
    import AppName from '$lib/header/AppName.svelte';
</script>
<footer>
    <!-- ROW 1-->
    <LayoutGrid>
      <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
        <div class="info">
          <div>
            <span class="merchant-type-name" style="font-size: 1.5em;">Payments</span>
            <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
          </div>
          <ul>
            <li>Payments</li>
            <li>In Person</li>
            <li>By Invoice</li>
            <li>On Your Computer</li>
            <li>On Your Website</li>
            <li>Risk Manager</li>
            <li>Payment Platform</li>
            <li>Payments Security</li>
            <li>Transfers</li>
            <li>Merchant Services</li>
          </ul>
        </div>
      </Cell>
      <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
        <div class="info">
          <div>
            <span class="merchant-type-name" style="font-size: 1.5em;">Point of Sale</span>
            <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
          </div>
          <ul>
            <li>Point of Sale Overview</li>
            <li><AppName /> Point of Sale</li>
            <li><AppName /> for Restaurants</li>
            <li><AppName /> for Retail</li>
            <li><AppName /> Appointments</li>
          </ul>
        </div>
      </Cell>
      <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
        <div class="info">
          <div>
            <span class="merchant-type-name" style="font-size: 1.5em;">Hardware</span>
            <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
          </div>
          <ul>
            <li>Reader for Magstripe</li>
            <li>Contactless (NFC) & Chip Reader</li>
            <li>Terminal</li>
            <li>Register</li>
            <li>Shop Hardware</li>
            <li>Rent Hardware</li>
            <li>Buy in Store</li>
            <li>Compare Hardware</li>
          </ul>
        </div>
      </Cell>
      <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
        <div class="info">
          <div>
            <span class="merchant-type-name" style="font-size: 1.5em;">More Tools</span>
            <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
          </div>
          <ul>
            <li>Online Store</li>
            <li>Online Checkout</li>
            <li>Checking</li>
            <li>Loans</li>
            <li>Savings</li>
            <li>Payroll</li>
            <li>Team Management</li>
            <li>Marketing</li>
            <li>SMS Marketing</li>
            <li>Messages</li>
            <li>Loyalty</li>
            <li>Dashboard</li>
            <li>Gift Cards</li>
            <li>Customer Directory</li>
            <li>Inventory Management</li>
            <li>Photo Studio</li>
            <li>Square KDS</li>
          </ul>
        </div>
      </Cell>

    <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
      <div class="info">
        <div>
          <span class="merchant-type-name" style="font-size: 1.5em;">Developers</span>
          <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
        </div>
        <ul>
          <li>Developer Platform</li>
          <li>Reader SDK</li>
          <li>In-App Payments SDK</li>
          <li>Online Payments APIs</li>
          <li>Documentation</li>
          <li>Developer Dashboard</li>
        </ul>
      </div>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
      <div class="info">
        <div>
          <span class="merchant-type-name" style="font-size: 1.5em;">Resources</span>
          <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
        </div>
        <ul>
          <li>Pricing</li>
          <li>Contact Sales</li>
          <li>Support Center</li>
          <li>App Marketplace</li>
          <li>Small Business Development</li>
          <li>Blog</li>
          <li>Guides</li>
          <li>Seller Community</li>
          <li>Events</li>
          <li>Service Status</li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
      <div class="info">
        <div>
          <span class="merchant-type-name" style="font-size: 1.5em;">Business Types</span>
          <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
        </div>
        <ul>
          <li>Large businesses</li>
          <li>Retail</li>
          <li>CBD Retail</li>
          <li>Coffee Shops</li>
          <li>Quick Service</li>
          <li>Full Service</li>
          <li>Bars & Breweries</li>
          <li>Beauty Professionals</li>
          <li>Health & Fitness</li>
          <li>Home & Repair Services</li>
          <li>Professional Services</li>
        </ul>
      </div>
    </Cell>
    <Cell spanDevices={{ desktop: 3, tablet: 4, phone: 2 }}>
      <div class="info">
        <div>
          <span class="merchant-type-name" style="font-size: 1.5em;"><AppName /></span>
          <span class="merchant-type-icon"><Icon class="material-icons" style="font-size: 1em;"  slot="trailingIcon">south</Icon></span>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Press and Media</li>
            <li>Investor Relations</li>
            <li>Affiliate Program</li>
            <li>Partner with Square</li>
            <li>Careers</li>
            <li>Developers</li>
            <li>Employment Verification</li>
        </ul>
      </div>
    </Cell>

      <Cell spanDevices={{ desktop: 12, tablet: 8, phone: 6 }}>
        <div class="divide" >
          <FormField style="color: #ccc; font-size: 16px;">
            <Icon class="material-icons" >language</Icon>
            <span>Unites States (English)</span>
          </FormField>
        </div>


      </Cell>

      <Cell spanDevices={{ desktop: 12, tablet: 4, phone: 2 }}>
        <div class="info">
          <ul>
            <li>Privacy Notice</li>
            <li>Additional California Privacy Disclosure</li>
            <li>Terms of Service</li>
            <li>Investor Relations</li>
            <li>Licensesm</li>
            <li>Government</li>
            <li>Square Capital, LLC Licenses</li>
            <li>Block, Inc.</li>
          </ul>
        </div>
      </Cell>
  </LayoutGrid>
</footer>
<style>
    *{
      font-family: 'Raleway', sans-serif;
    }
    .info {
      font-size: 0.8em;
    }

    .info ul {
      list-style-type: none; /* Remove bullets */
      padding: 0; /* Remove padding */
      margin: 0; /* Remove margins */
    }

    .info ul li {

      padding: 6px 0;
      margin: 0;
    }

    .divide {
      min-height: 40px;
      border-top: 2px solid #ccc;
      border-bottom: 2px solid #ccc;
      font-size: 2em;
      color: #ccc;
    }

    footer {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0;
        background-color: #444444;
      color: #edf0f8;
    }

    @media (min-width: 480px) {
        footer {
          padding: 40px;
          margin: 0;
        }
    }
</style>