import { Box, Button, Modal, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import { customFormData } from '../utils/CustomFormData';
import CountdownTimer from '../utils/CountDown';

const modelStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const Register = () => {

  const currentVerification = { EMAIL: true, MOBILE: false }
  const TIMER =10;
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState(customFormData)
  const [errorData, setErrorData] = useState(customFormData)
  const [isOtpVerified, setOtpVerified] = useState({ isEmailVerified: false, isMobileVerified: false })
  const [isCurrentEmailVerification, setCurrentEmailVerification] = useState(currentVerification.EMAIL);
  const [isOtpSend, setOtpSend] = useState(false);
   const [timeLeft, setTimeLeft] = useState(TIMER); // Initialize 2 minutes (120 seconds)

  const handleFillFormData = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))


  }

  const handleSubmit = () => {
    console.log(formData);
  }

  const handleOTPSendBtn = () => {
    setOtpSend(true);
    setTimeLeft(TIMER)
  }

  const handleOpen = (type) => {
    type === currentVerification.EMAIL ? setCurrentEmailVerification(currentVerification.EMAIL) : setCurrentEmailVerification(currentVerification.MOBILE);
    setOtpSend(false);
    setOpen(true)
  };
  const handleClose = () => {
    setOtpSend(false);
    setOpen(false);
  }

  return (
    <>

      {/* form */}
      <Box
        component="form"
        sx={{ '& .MuiTextField-root': { m: 1, width: '60ch' } }}
        noValidate
        autoComplete="off"
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <Box>
            <Typography>Register</Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column' }}>

            <div>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <TextField
                    error={errorData.emailId !== ''}
                    type='email'
                    id="outlined-error-helper-text"
                    label="Email Id"
                    size='small'
                    helperText={errorData.emailId}
                    name='emailId'
                    onChange={handleFillFormData}
                    value={formData.emailId}
                  />
                </div>
                <div>
                  {isOtpVerified.isEmailVerified ? <Typography sx={{ color: '#0f0' }}>Verified</Typography> : <Button onClick={() => handleOpen(currentVerification.EMAIL)}>Otp Check</Button>}
                </div>
              </Box>
            </div>

            <div>
              <TextField
                error={errorData.userName !== ''}
                type='text'
                id="outlined-error-helper-text"
                label="User name"
                size='small'
                helperText={errorData.userName}
                name='userName'
                onChange={handleFillFormData}
                value={formData.userName}

              />
            </div>

            <div>
              <TextField
                error={errorData.password !== ''}
                type='password'
                id="outlined-error-helper-text"
                label="Password"
                size='small'
                helperText={errorData.password}
                name='password'
                onChange={handleFillFormData}
                value={formData.password}
              />
            </div>

            <div>
              <TextField
                error={errorData.confirmPassword !== ''}
                type='password'
                id="outlined-error-helper-text"
                label="Confirm Password"
                size='small'
                helperText={errorData.confirmPassword}
                name='confirmPassword'
                onChange={handleFillFormData}
                value={formData.confirmPassword}
              />
            </div>
            <div>
              <TextField
                error={errorData.fullName !== ''}
                type='text'
                id="outlined-error-helper-text"
                label="Full Name"
                size='small'
                helperText={errorData.fullName}
                name='fullName'
                onChange={handleFillFormData}
                value={formData.fullName}
              />
            </div>
            <div>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <div>
                  <TextField
                    error={errorData.mobileNo !== ''}
                    type='number'
                    id="outlined-error-helper-text"
                    label="Mobile No"
                    size='small'
                    helperText={errorData.mobileNo}
                    name='mobileNo'
                    onChange={handleFillFormData}
                    value={formData.mobileNo}
                  />
                </div>
                <div>
                  {isOtpVerified.isMobileVerified ? <Typography sx={{ color: '#0f0' }}>Verified</Typography> : <Button onClick={() => handleOpen(currentVerification.MOBILE)}>Otp Check</Button>}
                </div>
              </Box>
            </div>
            <div>
              <TextField
                error={errorData.dob !== ''}
                type='date'
                id="outlined-error-helper-text"
                label="D.O.B"
                size='small'
                helperText={errorData.dob}
                name='dob'
                onChange={handleFillFormData}
                value={formData.dob}
                InputLabelProps={{ shrink: true }}
              />
            </div>
            <div>
              <TextField
                error={errorData.guardian !== ''}
                type='text'
                id="outlined-error-helper-text"
                label="Father / Mother Name"
                size='small'
                helperText={errorData.guardian}
                name='guardian'
                onChange={handleFillFormData}
                value={formData.guardian}
              />
            </div>




          </Box>

          <div>
            <Button variant="outlined" onClick={handleSubmit}>Primary</Button>
          </div>
        </Box>
      </Box>

      <div>

        <Modal
          keepMounted
          open={open}
          onClose={handleClose}
          aria-labelledby="keep-mounted-modal-title"
          aria-describedby="keep-mounted-modal-description"
        >
          <Box sx={modelStyle}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                OTP Check
              </Typography>
             { isOtpSend && <Typography id="keep-mounted-modal-title" variant="h6" component="h2">
                <CountdownTimer timeLeft={timeLeft} setTimeLeft={setTimeLeft}/>
              </Typography>}
            </Box>


            {isCurrentEmailVerification === currentVerification.EMAIL &&
              <Box sx={{ display: 'flex', gap: '8px', mt: 2 }}>
                <Typography>Email:</Typography>
                <Typography>{formData.emailId}</Typography>
                <div>
                  {!isOtpSend && <Button variant="contained" size='small' onClick={handleOTPSendBtn} >Send Otp</Button>}
                </div>
              </Box>
            }

            {isCurrentEmailVerification === currentVerification.MOBILE &&
              <Box
                sx={{ display: 'flex', flexDirection: 'column', gap: '8px', mt: 2, padding: '8px' }}>
                <Box sx={{ display: 'flex', gap: '8px' }}>
                  <Typography>Mobile No:</Typography>
                  <Typography>{formData.mobileNo}</Typography>
                </Box>

                <Box sx={{ alignSelf: 'end' }}>
                  {!isOtpSend && (
                    <Button variant="contained" size="small" onClick={handleOTPSendBtn} >
                      Send Otp
                    </Button>
                  )}
                </Box>
              </Box>
            }
            {
              isOtpSend &&
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                  <TextField
                    error={false}
                    type='text'
                    id="outlined-error-helper-text"
                    label="Enter OTP"
                    size='small'
                    helperText=""

                  />
                </Box>
                <Box sx={{ alignSelf: 'end',display:'flex',gap:2 }}>
                  <Box>
                    <Button variant="contained" size='small'>Verify</Button>
                  </Box>
                 {timeLeft===0 && <Box>
                    <Button variant="outlined" size='small'>Resend</Button>
                  </Box>}
                </Box>
              </Box>
            }
          </Box>
        </Modal>
      </div>
    </>
  )
}

export default Register