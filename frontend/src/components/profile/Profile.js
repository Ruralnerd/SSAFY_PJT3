/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react'
import { Link } from 'react-router-dom'

const ProfileUser = css`
  display: flex;
  border: 3px solid blue;
`
const ProfileUserImg = css`
  border: 3px solid red;
`
const ProfileUserData = css`
  border: 3px solid green;
`
const ProfileSaleList = css`
  display: flex;
  border: 3px solid purple;
`
const ProfileSaleDetail = css`
  border: 3px solid orange;
`
const ProfileThumbnailImg = css`
  border: 3px solid green;
`
const ProfileTitle = css`
  border: 3px solid blue;
`

const Profile = ({ loadingProfile, userData }) => {
  console.log('3.컴포넌트')
  console.log(userData)
  console.log('3-1컴포넌트에서 userData값을 불러와야함 ㅠㅠ')
  const updateProfileButton = () => {
    console.log('내정보 수정 버튼 클릭함')
  }
  const registerButton = () => {
    console.log('판매자 등록버튼 클릭함!')
  }
  // 판매자일 경우
  // profile이 빈 값이 아니고 userData.is_seller가 true일떄
  if (userData && userData.is_seller === true) {
    return (
      <div>
        {loadingProfile && '로딩 중...'}
        {!loadingProfile && userData && (
          <div>
            <div>판매자님의 프로필</div>
            <button onClick={updateProfileButton}>내 정보 수정</button>
            <div css={ProfileUser}>
              <div css={ProfileUserImg}>{userData.profile_img}</div>
              <div css={ProfileUserData}>
                <div>이름:{userData.nickname}</div>
                <div>주소:{userData.address}</div>
                <div>연락처:{userData.phone}</div>
              </div>
            </div>
            <div>판매자님의 판매상품</div>
            <div css={ProfileSaleList}>
              {userData.markets.map((market) => (
                <div key={market.id}>
                  <div css={ProfileSaleDetail}>
                    <div css={ProfileThumbnailImg}>{market.thumbnail_img}</div>
                    <div css={ProfileTitle}>{market.title}</div>
                  </div>
                </div>
              ))}
            </div>
            <div>판매자님의 이야기</div>
            <div css={ProfileSaleList}>
              {userData.storys.map((story) => (
                <div key={story.id}>
                  <div css={ProfileSaleDetail}>
                    <div css={ProfileThumbnailImg}>{story.thumbnail_img}</div>
                    <div css={ProfileTitle}>{story.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }
  // 판매자가 아닐 경우
  else {
    return (
      <div>
        {loadingProfile && '로딩 중...'}
        {!loadingProfile && userData && (
          <div>
            <div>구매자님의 프로필</div>
            <button onClick={updateProfileButton}>내 정보 수정</button>
            <div css={ProfileUser}>
              <div css={ProfileUserImg}>{userData.profile_img}</div>
              <div css={ProfileUserData}>
                <div>이름:{userData.nickname}</div>
                <div>주소:{userData.address}</div>
                <div>연락처:{userData.phone}</div>
              </div>
            </div>
            <button onClick={registerButton}>판매자 등록하기</button>
          </div>
        )}
      </div>
    )
  }
}
export default Profile