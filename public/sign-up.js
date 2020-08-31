export const signupForm = `<div id="form-container">
<div class="signup-form">
    <div class="form-header">
        <img width="30px" src="/resources/Twitter_bird_logo_2012.svg.png"/>
    </div>
    <h1>Create your account</h1>
    <form action="/register" method="post">
        <div class="input-field">
            <label for="email">Email</label>
            <input type="text" id="email" name="username"/>
        </div>
        <div class="input-field">
            <label for="password">Password</label>
            <input type="password" id="password" name="password"/>
        </div>
        <div>
            <p>By signing up, you agree to the Terms of Service and Privacy Policy, including Cookie Use. Others will be able to find you by email or phone number when provided.</p>
        </div>
        <input type="submit" value="Sign up"/>
    </form>
</div>
</div>`;

