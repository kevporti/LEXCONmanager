import React from 'react';
import ReactDOM from 'react-dom';

function InputCountries(props) {

    function handle(e) {
        props.setType(e.target.value);
    }

    return(
        <select 
            onChange={handle}
            id="country" 
            name="paisEmpresa" 
            className="bg-darklight py-1 px-2 scrollbar rounded-sm">
                <option className="bg-darklight py-1 px-2" value="Afganistan">Afghanistan</option>
                <option className="bg-darklight py-1 px-2" value="Albania">Albania</option>
                <option className="bg-darklight py-1 px-2" value="Algeria">Algeria</option>
                <option className="bg-darklight py-1 px-2" value="American Samoa">American Samoa</option>
                <option className="bg-darklight py-1 px-2" value="Andorra">Andorra</option>
                <option className="bg-darklight py-1 px-2" value="Angola">Angola</option>
                <option className="bg-darklight py-1 px-2" value="Anguilla">Anguilla</option>
                <option className="bg-darklight py-1 px-2" value="Antigua & Barbuda">Antigua & Barbuda</option>
                <option className="bg-darklight py-1 px-2" value="Argentina">Argentina</option>
                <option className="bg-darklight py-1 px-2" value="Armenia">Armenia</option>
                <option className="bg-darklight py-1 px-2" value="Aruba">Aruba</option>
                <option className="bg-darklight py-1 px-2" value="Australia">Australia</option>
                <option className="bg-darklight py-1 px-2" value="Austria">Austria</option>
                <option className="bg-darklight py-1 px-2" value="Azerbaijan">Azerbaijan</option>
                <option className="bg-darklight py-1 px-2" value="Bahamas">Bahamas</option>
                <option className="bg-darklight py-1 px-2" value="Bahrain">Bahrain</option>
                <option className="bg-darklight py-1 px-2" value="Bangladesh">Bangladesh</option>
                <option className="bg-darklight py-1 px-2" value="Barbados">Barbados</option>
                <option className="bg-darklight py-1 px-2" value="Belarus">Belarus</option>
                <option className="bg-darklight py-1 px-2" value="Belgium">Belgium</option>
                <option className="bg-darklight py-1 px-2" value="Belize">Belize</option>
                <option className="bg-darklight py-1 px-2" value="Benin">Benin</option>
                <option className="bg-darklight py-1 px-2" value="Bermuda">Bermuda</option>
                <option className="bg-darklight py-1 px-2" value="Bhutan">Bhutan</option>
                <option className="bg-darklight py-1 px-2" value="Bolivia">Bolivia</option>
                <option className="bg-darklight py-1 px-2" value="Bonaire">Bonaire</option>
                <option className="bg-darklight py-1 px-2" value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                <option className="bg-darklight py-1 px-2" value="Botswana">Botswana</option>
                <option className="bg-darklight py-1 px-2" value="Brazil">Brazil</option>
                <option className="bg-darklight py-1 px-2" value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                <option className="bg-darklight py-1 px-2" value="Brunei">Brunei</option>
                <option className="bg-darklight py-1 px-2" value="Bulgaria">Bulgaria</option>
                <option className="bg-darklight py-1 px-2" value="Burkina Faso">Burkina Faso</option>
                <option className="bg-darklight py-1 px-2" value="Burundi">Burundi</option>
                <option className="bg-darklight py-1 px-2" value="Cambodia">Cambodia</option>
                <option className="bg-darklight py-1 px-2" value="Cameroon">Cameroon</option>
                <option className="bg-darklight py-1 px-2" value="Canada">Canada</option>
                <option className="bg-darklight py-1 px-2" value="Canary Islands">Canary Islands</option>
                <option className="bg-darklight py-1 px-2" value="Cape Verde">Cape Verde</option>
                <option className="bg-darklight py-1 px-2" value="Cayman Islands">Cayman Islands</option>
                <option className="bg-darklight py-1 px-2" value="Central African Republic">Central African Republic</option>
                <option className="bg-darklight py-1 px-2" value="Chad">Chad</option>
                <option className="bg-darklight py-1 px-2" value="Channel Islands">Channel Islands</option>
                <option className="bg-darklight py-1 px-2" value="Chile">Chile</option>
                <option className="bg-darklight py-1 px-2" value="China">China</option>
                <option className="bg-darklight py-1 px-2" value="Christmas Island">Christmas Island</option>
                <option className="bg-darklight py-1 px-2" value="Cocos Island">Cocos Island</option>
                <option className="bg-darklight py-1 px-2" value="Colombia">Colombia</option>
                <option className="bg-darklight py-1 px-2" value="Comoros">Comoros</option>
                <option className="bg-darklight py-1 px-2" value="Congo">Congo</option>
                <option className="bg-darklight py-1 px-2" value="Cook Islands">Cook Islands</option>
                <option className="bg-darklight py-1 px-2" value="Costa Rica">Costa Rica</option>
                <option className="bg-darklight py-1 px-2" value="Cote DIvoire">Cote DIvoire</option>
                <option className="bg-darklight py-1 px-2" value="Croatia">Croatia</option>
                <option className="bg-darklight py-1 px-2" value="Cuba">Cuba</option>
                <option className="bg-darklight py-1 px-2" value="Curaco">Curacao</option>
                <option className="bg-darklight py-1 px-2" value="Cyprus">Cyprus</option>
                <option className="bg-darklight py-1 px-2" value="Czech Republic">Czech Republic</option>
                <option className="bg-darklight py-1 px-2" value="Denmark">Denmark</option>
                <option className="bg-darklight py-1 px-2" value="Djibouti">Djibouti</option>
                <option className="bg-darklight py-1 px-2" value="Dominica">Dominica</option>
                <option className="bg-darklight py-1 px-2" value="Dominican Republic">Dominican Republic</option>
                <option className="bg-darklight py-1 px-2" value="East Timor">East Timor</option>
                <option className="bg-darklight py-1 px-2" value="Ecuador">Ecuador</option>
                <option className="bg-darklight py-1 px-2" value="Egypt">Egypt</option>
                <option className="bg-darklight py-1 px-2" value="El Salvador">El Salvador</option>
                <option className="bg-darklight py-1 px-2" value="Equatorial Guinea">Equatorial Guinea</option>
                <option className="bg-darklight py-1 px-2" value="Eritrea">Eritrea</option>
                <option className="bg-darklight py-1 px-2" value="Estonia">Estonia</option>
                <option className="bg-darklight py-1 px-2" value="Ethiopia">Ethiopia</option>
                <option className="bg-darklight py-1 px-2" value="Falkland Islands">Falkland Islands</option>
                <option className="bg-darklight py-1 px-2" value="Faroe Islands">Faroe Islands</option>
                <option className="bg-darklight py-1 px-2" value="Fiji">Fiji</option>
                <option className="bg-darklight py-1 px-2" value="Finland">Finland</option>
                <option className="bg-darklight py-1 px-2" value="France">France</option>
                <option className="bg-darklight py-1 px-2" value="French Guiana">French Guiana</option>
                <option className="bg-darklight py-1 px-2" value="French Polynesia">French Polynesia</option>
                <option className="bg-darklight py-1 px-2" value="French Southern Ter">French Southern Ter</option>
                <option className="bg-darklight py-1 px-2" value="Gabon">Gabon</option>
                <option className="bg-darklight py-1 px-2" value="Gambia">Gambia</option>
                <option className="bg-darklight py-1 px-2" value="Georgia">Georgia</option>
                <option className="bg-darklight py-1 px-2" value="Germany">Germany</option>
                <option className="bg-darklight py-1 px-2" value="Ghana">Ghana</option>
                <option className="bg-darklight py-1 px-2" value="Gibraltar">Gibraltar</option>
                <option className="bg-darklight py-1 px-2" value="Great Britain">Great Britain</option>
                <option className="bg-darklight py-1 px-2" value="Greece">Greece</option>
                <option className="bg-darklight py-1 px-2" value="Greenland">Greenland</option>
                <option className="bg-darklight py-1 px-2" value="Grenada">Grenada</option>
                <option className="bg-darklight py-1 px-2" value="Guadeloupe">Guadeloupe</option>
                <option className="bg-darklight py-1 px-2" value="Guam">Guam</option>
                <option className="bg-darklight py-1 px-2" value="Guatemala">Guatemala</option>
                <option className="bg-darklight py-1 px-2" value="Guinea">Guinea</option>
                <option className="bg-darklight py-1 px-2" value="Guyana">Guyana</option>
                <option className="bg-darklight py-1 px-2" value="Haiti">Haiti</option>
                <option className="bg-darklight py-1 px-2" value="Hawaii">Hawaii</option>
                <option className="bg-darklight py-1 px-2" value="Honduras">Honduras</option>
                <option className="bg-darklight py-1 px-2" value="Hong Kong">Hong Kong</option>
                <option className="bg-darklight py-1 px-2" value="Hungary">Hungary</option>
                <option className="bg-darklight py-1 px-2" value="Iceland">Iceland</option>
                <option className="bg-darklight py-1 px-2" value="Indonesia">Indonesia</option>
                <option className="bg-darklight py-1 px-2" value="India">India</option>
                <option className="bg-darklight py-1 px-2" value="Iran">Iran</option>
                <option className="bg-darklight py-1 px-2" value="Iraq">Iraq</option>
                <option className="bg-darklight py-1 px-2" value="Ireland">Ireland</option>
                <option className="bg-darklight py-1 px-2" value="Isle of Man">Isle of Man</option>
                <option className="bg-darklight py-1 px-2" value="Israel">Israel</option>
                <option className="bg-darklight py-1 px-2" value="Italy">Italy</option>
                <option className="bg-darklight py-1 px-2" value="Jamaica">Jamaica</option>
                <option className="bg-darklight py-1 px-2" value="Japan">Japan</option>
                <option className="bg-darklight py-1 px-2" value="Jordan">Jordan</option>
                <option className="bg-darklight py-1 px-2" value="Kazakhstan">Kazakhstan</option>
                <option className="bg-darklight py-1 px-2" value="Kenya">Kenya</option>
                <option className="bg-darklight py-1 px-2" value="Kiribati">Kiribati</option>
                <option className="bg-darklight py-1 px-2" value="Korea North">Korea North</option>
                <option className="bg-darklight py-1 px-2" value="Korea Sout">Korea South</option>
                <option className="bg-darklight py-1 px-2" value="Kuwait">Kuwait</option>
                <option className="bg-darklight py-1 px-2" value="Kyrgyzstan">Kyrgyzstan</option>
                <option className="bg-darklight py-1 px-2" value="Laos">Laos</option>
                <option className="bg-darklight py-1 px-2" value="Latvia">Latvia</option>
                <option className="bg-darklight py-1 px-2" value="Lebanon">Lebanon</option>
                <option className="bg-darklight py-1 px-2" value="Lesotho">Lesotho</option>
                <option className="bg-darklight py-1 px-2" value="Liberia">Liberia</option>
                <option className="bg-darklight py-1 px-2" value="Libya">Libya</option>
                <option className="bg-darklight py-1 px-2" value="Liechtenstein">Liechtenstein</option>
                <option className="bg-darklight py-1 px-2" value="Lithuania">Lithuania</option>
                <option className="bg-darklight py-1 px-2" value="Luxembourg">Luxembourg</option>
                <option className="bg-darklight py-1 px-2" value="Macau">Macau</option>
                <option className="bg-darklight py-1 px-2" value="Macedonia">Macedonia</option>
                <option className="bg-darklight py-1 px-2" value="Madagascar">Madagascar</option>
                <option className="bg-darklight py-1 px-2" value="Malaysia">Malaysia</option>
                <option className="bg-darklight py-1 px-2" value="Malawi">Malawi</option>
                <option className="bg-darklight py-1 px-2" value="Maldives">Maldives</option>
                <option className="bg-darklight py-1 px-2" value="Mali">Mali</option>
                <option className="bg-darklight py-1 px-2" value="Malta">Malta</option>
                <option className="bg-darklight py-1 px-2" value="Marshall Islands">Marshall Islands</option>
                <option className="bg-darklight py-1 px-2" value="Martinique">Martinique</option>
                <option className="bg-darklight py-1 px-2" value="Mauritania">Mauritania</option>
                <option className="bg-darklight py-1 px-2" value="Mauritius">Mauritius</option>
                <option className="bg-darklight py-1 px-2" value="Mayotte">Mayotte</option>
                <option className="bg-darklight py-1 px-2" value="Mexico">Mexico</option>
                <option className="bg-darklight py-1 px-2" value="Midway Islands">Midway Islands</option>
                <option className="bg-darklight py-1 px-2" value="Moldova">Moldova</option>
                <option className="bg-darklight py-1 px-2" value="Monaco">Monaco</option>
                <option className="bg-darklight py-1 px-2" value="Mongolia">Mongolia</option>
                <option className="bg-darklight py-1 px-2" value="Montserrat">Montserrat</option>
                <option className="bg-darklight py-1 px-2" value="Morocco">Morocco</option>
                <option className="bg-darklight py-1 px-2" value="Mozambique">Mozambique</option>
                <option className="bg-darklight py-1 px-2" value="Myanmar">Myanmar</option>
                <option className="bg-darklight py-1 px-2" value="Nambia">Nambia</option>
                <option className="bg-darklight py-1 px-2" value="Nauru">Nauru</option>
                <option className="bg-darklight py-1 px-2" value="Nepal">Nepal</option>
                <option className="bg-darklight py-1 px-2" value="Netherland Antilles">Netherland Antilles</option>
                <option className="bg-darklight py-1 px-2" value="Netherlands">Netherlands (Holland, Europe)</option>
                <option className="bg-darklight py-1 px-2" value="Nevis">Nevis</option>
                <option className="bg-darklight py-1 px-2" value="New Caledonia">New Caledonia</option>
                <option className="bg-darklight py-1 px-2" value="New Zealand">New Zealand</option>
                <option className="bg-darklight py-1 px-2" value="Nicaragua">Nicaragua</option>
                <option className="bg-darklight py-1 px-2" value="Niger">Niger</option>
                <option className="bg-darklight py-1 px-2" value="Nigeria">Nigeria</option>
                <option className="bg-darklight py-1 px-2" value="Niue">Niue</option>
                <option className="bg-darklight py-1 px-2" value="Norfolk Island">Norfolk Island</option>
                <option className="bg-darklight py-1 px-2" value="Norway">Norway</option>
                <option className="bg-darklight py-1 px-2" value="Oman">Oman</option>
                <option className="bg-darklight py-1 px-2" value="Pakistan">Pakistan</option>
                <option className="bg-darklight py-1 px-2" value="Palau Island">Palau Island</option>
                <option className="bg-darklight py-1 px-2" value="Palestine">Palestine</option>
                <option className="bg-darklight py-1 px-2" value="Panama">Panama</option>
                <option className="bg-darklight py-1 px-2" value="Papua New Guinea">Papua New Guinea</option>
                <option className="bg-darklight py-1 px-2" value="Paraguay">Paraguay</option>
                <option className="bg-darklight py-1 px-2" value="Peru">Peru</option>
                <option className="bg-darklight py-1 px-2" value="Phillipines">Philippines</option>
                <option className="bg-darklight py-1 px-2" value="Pitcairn Island">Pitcairn Island</option>
                <option className="bg-darklight py-1 px-2" value="Poland">Poland</option>
                <option className="bg-darklight py-1 px-2" value="Portugal">Portugal</option>
                <option className="bg-darklight py-1 px-2" value="Puerto Rico">Puerto Rico</option>
                <option className="bg-darklight py-1 px-2" value="Qatar">Qatar</option>
                <option className="bg-darklight py-1 px-2" value="Republic of Montenegro">Republic of Montenegro</option>
                <option className="bg-darklight py-1 px-2" value="Republic of Serbia">Republic of Serbia</option>
                <option className="bg-darklight py-1 px-2" value="Reunion">Reunion</option>
                <option className="bg-darklight py-1 px-2" value="Romania">Romania</option>
                <option className="bg-darklight py-1 px-2" value="Russia">Russia</option>
                <option className="bg-darklight py-1 px-2" value="Rwanda">Rwanda</option>
                <option className="bg-darklight py-1 px-2" value="St Barthelemy">St Barthelemy</option>
                <option className="bg-darklight py-1 px-2" value="St Eustatius">St Eustatius</option>
                <option className="bg-darklight py-1 px-2" value="St Helena">St Helena</option>
                <option className="bg-darklight py-1 px-2" value="St Kitts-Nevis">St Kitts-Nevis</option>
                <option className="bg-darklight py-1 px-2" value="St Lucia">St Lucia</option>
                <option className="bg-darklight py-1 px-2" value="St Maarten">St Maarten</option>
                <option className="bg-darklight py-1 px-2" value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                <option className="bg-darklight py-1 px-2" value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                <option className="bg-darklight py-1 px-2" value="Saipan">Saipan</option>
                <option className="bg-darklight py-1 px-2" value="Samoa">Samoa</option>
                <option className="bg-darklight py-1 px-2" value="Samoa American">Samoa American</option>
                <option className="bg-darklight py-1 px-2" value="San Marino">San Marino</option>
                <option className="bg-darklight py-1 px-2" value="Sao Tome & Principe">Sao Tome & Principe</option>
                <option className="bg-darklight py-1 px-2" value="Saudi Arabia">Saudi Arabia</option>
                <option className="bg-darklight py-1 px-2" value="Senegal">Senegal</option>
                <option className="bg-darklight py-1 px-2" value="Seychelles">Seychelles</option>
                <option className="bg-darklight py-1 px-2" value="Sierra Leone">Sierra Leone</option>
                <option className="bg-darklight py-1 px-2" value="Singapore">Singapore</option>
                <option className="bg-darklight py-1 px-2" value="Slovakia">Slovakia</option>
                <option className="bg-darklight py-1 px-2" value="Slovenia">Slovenia</option>
                <option className="bg-darklight py-1 px-2" value="Solomon Islands">Solomon Islands</option>
                <option className="bg-darklight py-1 px-2" value="Somalia">Somalia</option>
                <option className="bg-darklight py-1 px-2" value="South Africa">South Africa</option>
                <option className="bg-darklight py-1 px-2" value="Spain">Spain</option>
                <option className="bg-darklight py-1 px-2" value="Sri Lanka">Sri Lanka</option>
                <option className="bg-darklight py-1 px-2" value="Sudan">Sudan</option>
                <option className="bg-darklight py-1 px-2" value="Suriname">Suriname</option>
                <option className="bg-darklight py-1 px-2" value="Swaziland">Swaziland</option>
                <option className="bg-darklight py-1 px-2" value="Sweden">Sweden</option>
                <option className="bg-darklight py-1 px-2" value="Switzerland">Switzerland</option>
                <option className="bg-darklight py-1 px-2" value="Syria">Syria</option>
                <option className="bg-darklight py-1 px-2" value="Tahiti">Tahiti</option>
                <option className="bg-darklight py-1 px-2" value="Taiwan">Taiwan</option>
                <option className="bg-darklight py-1 px-2" value="Tajikistan">Tajikistan</option>
                <option className="bg-darklight py-1 px-2" value="Tanzania">Tanzania</option>
                <option className="bg-darklight py-1 px-2" value="Thailand">Thailand</option>
                <option className="bg-darklight py-1 px-2" value="Togo">Togo</option>
                <option className="bg-darklight py-1 px-2" value="Tokelau">Tokelau</option>
                <option className="bg-darklight py-1 px-2" value="Tonga">Tonga</option>
                <option className="bg-darklight py-1 px-2" value="Trinidad & Tobago">Trinidad & Tobago</option>
                <option className="bg-darklight py-1 px-2" value="Tunisia">Tunisia</option>
                <option className="bg-darklight py-1 px-2" value="Turkey">Turkey</option>
                <option className="bg-darklight py-1 px-2" value="Turkmenistan">Turkmenistan</option>
                <option className="bg-darklight py-1 px-2" value="Turks & Caicos Is">Turks & Caicos Is</option>
                <option className="bg-darklight py-1 px-2" value="Tuvalu">Tuvalu</option>
                <option className="bg-darklight py-1 px-2" value="Uganda">Uganda</option>
                <option className="bg-darklight py-1 px-2" value="United Kingdom">United Kingdom</option>
                <option className="bg-darklight py-1 px-2" value="Ukraine">Ukraine</option>
                <option className="bg-darklight py-1 px-2" value="United Arab Erimates">United Arab Emirates</option>
                <option className="bg-darklight py-1 px-2" value="United States of America">United States of America</option>
                <option className="bg-darklight py-1 px-2" value="Uraguay">Uruguay</option>
                <option className="bg-darklight py-1 px-2" value="Uzbekistan">Uzbekistan</option>
                <option className="bg-darklight py-1 px-2" value="Vanuatu">Vanuatu</option>
                <option className="bg-darklight py-1 px-2" value="Vatican City State">Vatican City State</option>
                <option className="bg-darklight py-1 px-2" value="Venezuela">Venezuela</option>
                <option className="bg-darklight py-1 px-2" value="Vietnam">Vietnam</option>
                <option className="bg-darklight py-1 px-2" value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                <option className="bg-darklight py-1 px-2" value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                <option className="bg-darklight py-1 px-2" value="Wake Island">Wake Island</option>
                <option className="bg-darklight py-1 px-2" value="Wallis & Futana Is">Wallis & Futana Is</option>
                <option className="bg-darklight py-1 px-2" value="Yemen">Yemen</option>
                <option className="bg-darklight py-1 px-2" value="Zaire">Zaire</option>
                <option className="bg-darklight py-1 px-2" value="Zambia">Zambia</option>
                <option className="bg-darklight py-1 px-2" value="Zimbabwe">Zimbabwe</option>
        </select>
    );
}

export default InputCountries;