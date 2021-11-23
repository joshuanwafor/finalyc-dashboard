import React from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useUserStore } from "../../store/user";
import { CUSTOM_API } from "../../configure/global_variables";
import toast from "react-hot-toast"
async function getBanks() {
    let response = await axios.get("https://api.paystack.co:443/bank?country=nigeria", {
        headers: {
            "Authorization": "Bearer sk_test_9684e8c5e16ebdf4816bbfaac0c28086971cb6ca"
        }
    });
    return response.data;
}


export const SetupAccount: React.FC<{}> = () => {

    let userStore = useUserStore()

    let [banks, setBanks] = React.useState<any[]>([])
    let [businessName, setBusinessName] = React.useState<string>("");
    let [settlementBank, setSettlementBank] = React.useState<string>("");
    let [accountNum, setAccountNum] = React.useState<string>("");

    let [phone, setPhone] = React.useState<string>("");

    let [email, setEmail] = React.useState<string>("");


    React.useEffect(() => {
        getBanks().then(v => {
            console.log(v)
            setBanks(v.data);
        })

    }, []);

    
    return <div>
        <h3>Setup payment account</h3>
        <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Label>Business name</Form.Label>
            <Form.Control type="text" placeholder="" value={businessName}
                onChange={(ev) => {
                    setBusinessName(ev.target.value)
                }}
            />
        </Form.Group>

        <Form.Group>
            <Form.Label>Bank</Form.Label>
            <Form.Select aria-label="Default select example" value={settlementBank} onChange={(e) => {
                setSettlementBank(e.target.value);
            }}>
                <option>Bank</option>
                {banks.map(v => {
                    return <option value={v.code}>{v.name}</option>;
                })}
            </Form.Select>
        </Form.Group>

        <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Label>Account number</Form.Label>
            <Form.Control type="text" placeholder="" value={accountNum}
                onChange={(ev) => {
                    setAccountNum(ev.target.value)
                }} />
        </Form.Group>

        <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Label>Primary email</Form.Label>
            <Form.Control type="text" placeholder="" value={userStore.user?.email} disabled />
        </Form.Group>

        <Form.Group className="my-4" controlId="formBasicEmail">
            <Form.Label>Primary phone</Form.Label>
            <Form.Control type="text" placeholder="" value={phone} onChange={(ev) => {
                setPhone(ev.target.value)
            }} />
        </Form.Group>

        <Button variant="primary" type="submit" onClick={() => {

            CUSTOM_API.userAPI?.postInstructorBankAccount({
                account_number: accountNum,
                primary_contact_email: email,
                primary_contact_phone: phone,
                settlement_bank: settlementBank,
                primary_contact_name: "",
                business_name: businessName,
                percentage_charge: 20
            }).then(v => {
                console.log(v);
                toast("Configured settlemen account")
                userStore.loadUserProfile();
            }).catch(v => {
                toast("Failed to add settlement account")
                console.log(v)
            })

        }}>
            Submit
        </Button>
    </div>
}
