package leafbot

import (
	"github.com/tidwall/gjson"

	message2 "github.com/huoxue1/leafbot/message"
)

//Context
// @Description: 上下文管理对象
//
type Context struct {
	Event    *Event
	Bot      API
	State    *State
	RawEvent gjson.Result
}

// Send
/**
 * @Description: 使用上下文对象方便的回复当前会话
 * @receiver ctx
 * @param message
 * @return int32
 */
func (ctx *Context) Send(message interface{}) int32 {
	if ctx.Event.MessageType == "group" {
		return ctx.Bot.SendGroupMsg(ctx.Event.GroupId, message)
	} else {
		return ctx.Bot.SendPrivateMsg(ctx.Event.UserId, message)
	}
}

//SendGroupMsg
/**
 * @Description:
 * @receiver ctx
 * @param groupId
 * @param message
 * @return int32
 */
func (ctx *Context) SendGroupMsg(groupId int, message interface{}) int32 {
	if _, ok := message.(string); ok {
		{
			message = message2.ParseMessageFromString(message.(string))
		}
	}
	type param struct {
		GroupId int         `json:"group_id"`
		Message interface{} `json:"message"`
	}
	result := ctx.CallApi("send_group_msg", param{
		GroupId: groupId,
		Message: message,
	})

	return int32(result.Get("message_id").Int())
}

//SendPrivateMsg
/**
 * @Description:
 * @receiver ctx
 * @param userId
 * @param message
 * @return int32
 */
func (ctx *Context) SendPrivateMsg(userId int, message interface{}) int32 {
	if _, ok := message.(string); ok {
		{
			message = message2.ParseMessageFromString(message.(string))
		}
	}
	type param struct {
		UserId  int         `json:"user_id"`
		Message interface{} `json:"message"`
	}
	result := ctx.CallApi("send_gprivate_msg", param{
		UserId:  userId,
		Message: message,
	})

	return int32(result.Get("message_id").Int())
}

//DeleteMsg
/**
 * @Description:
 * @receiver ctx
 * @param messageId
 */
func (ctx *Context) DeleteMsg(messageId int32) {
	ctx.CallApi("delete_msg", map[string]int32{"message_id": messageId})
}

//GetMsg
/**
 * @Description:
 * @receiver ctx
 * @param messageId
 * @return gjson.Result
 */
func (ctx *Context) GetMsg(messageId int32) gjson.Result {
	return ctx.CallApi("get_msg", map[string]int32{"message_id": messageId})
}

// SetGroupBan
/*
   @Description:
   @receiver b
   @param groupId int
   @param userId int
   @param duration int
*/
func (ctx *Context) SetGroupBan(groupId int, userId int, duration int) {
	ctx.CallApi("set_group_ban", map[string]interface{}{
		"group_id": groupId,
		"user_id":  userId,
		"duration": duration},
	)
}

// SetGroupCard
/*
   @Description:
   @receiver b
   @param groupId int
   @param userId int
   @param card string
*/
func (ctx *Context) SetGroupCard(groupId int, userId int, card string) {
	ctx.CallApi("set_group_card", map[string]interface{}{
		"group_id": groupId,
		"user_id":  userId,
		"card":     card},
	)
}

// SendMsg
/*
   @Description:
   @receiver b
   @param messageType string
   @param userId int
   @param groupId int
   @param message string
   @param autoEscape bool
   @return int32
*/
func (ctx *Context) SendMsg(messageType string, userId int, groupId int, message interface{}) int32 {
	if messageType == "group" {
		return ctx.SendGroupMsg(groupId, message)
	} else {
		return ctx.SendPrivateMsg(userId, message)
	}
}

// SendLike
/*
   @Description:
   @receiver b
   @param userId int
   @param times int
*/
func (ctx *Context) SendLike(userId int, times int) {
	ctx.CallApi("send_like", map[string]interface{}{
		"user_id": userId,
		"times":   times},
	)
}

// SetGroupKick
/*
   @Description:
   @receiver b
   @param groupId int
   @param userId int
   @param rejectAddRequest bool
*/
func (ctx *Context) SetGroupKick(groupId int, userId int, rejectAddRequest bool) {
	ctx.CallApi("set_group_kick", map[string]interface{}{
		"group_id":           groupId,
		"user_id":            userId,
		"reject_add_request": rejectAddRequest},
	)
}

// SetGroupAnonymousBan
/*
   @Description:
   @receiver b
   @param groupId int
   @param flag string
   @param duration int
*/
func (ctx *Context) SetGroupAnonymousBan(groupId int, flag string, duration int) {
	ctx.CallApi("set_group_anonymous_ban", map[string]interface{}{
		"group_id": groupId,
		"flag":     flag,
		"duration": duration},
	)
}

// SetGroupWholeBan
/*
   @Description:
   @receiver b
   @param groupId int
   @param enable bool
*/
func (ctx *Context) SetGroupWholeBan(groupId int, enable bool) {
	ctx.CallApi("set_group_whole_ban", map[string]interface{}{"group_id": groupId, "enable": enable})
}

// SetGroupAdmin
/*
   @Description:
   @receiver b
   @param groupId int
   @param userId int
   @param enable bool
*/
func (ctx *Context) SetGroupAdmin(groupId int, userId int, enable bool) {
	ctx.CallApi("set_group_admin", map[string]interface{}{"group_id": groupId, "user_id": userId, "enable": enable})
}

// SetGroupAnonymous
/*
   @Description:
   @receiver b
   @param groupId int
   @param enable bool
*/
func (ctx *Context) SetGroupAnonymous(groupId int, enable bool) {
	ctx.CallApi("set_group_anonymous", map[string]interface{}{"group_id": groupId, "enable": enable})
}

// SetGroupName
/*
   @Description:
   @receiver b
   @param groupId int
   @param groupName string
*/
func (ctx *Context) SetGroupName(groupId int, groupName string) {
	ctx.CallApi("set_group_name", map[string]interface{}{"group_id": groupId, "group_name": groupName})
}

// SetGroupLeave
/*
   @Description:
   @receiver b
   @param groupId int
   @param isDisMiss bool
*/
func (ctx *Context) SetGroupLeave(groupId int, isDisMiss bool) {
	ctx.CallApi("set_group_leave", map[string]interface{}{"group_id": groupId, "is_dismiss": isDisMiss})
}

// SetGroupSpecialTitle
/*
   @Description:
   @receiver b
   @param groupId int
   @param userId int
   @param specialTitle string
   @param duration int
*/
func (ctx *Context) SetGroupSpecialTitle(groupId int, userId int, specialTitle string, duration int) {
	ctx.CallApi("set_group_special_title", map[string]interface{}{"group_id": groupId, "user_id": userId, "special_title": specialTitle, "duration": duration})
}

// SetFriendAddRequest
/*
   @Description:
   @receiver b
   @param flag string
   @param approve bool
   @param remark string
*/
func (ctx *Context) SetFriendAddRequest(flag string, approve bool, remark string) {
	ctx.CallApi("set_friend_add_request", map[string]interface{}{"flag": flag, "approve": approve, "remark": remark})
}

// SetGroupAddRequest
/*
   @Description:
   @receiver b
   @param flag string
   @param subType string
   @param approve bool
   @param reason string
*/
func (ctx *Context) SetGroupAddRequest(flag string, subType string, approve bool, reason string) {
	ctx.CallApi("set_group_add_request", map[string]interface{}{
		"flag":     flag,
		"sub_type": subType,
		"approve":  approve,
		"reason":   reason})
}

// GetLoginInfo
/*
   @Description:
   @receiver b
   @return LoginInfo
*/
func (ctx *Context) GetLoginInfo() gjson.Result {
	return ctx.CallApi("get_login_info", nil)
}

// GetStrangerInfo
/*
   @Description:
   @receiver b
   @param userId int
   @param noCache bool
   @return Senders
*/
func (ctx *Context) GetStrangerInfo(userId int, noCache bool) gjson.Result {
	return ctx.CallApi("get_stranger_info", map[string]interface{}{"user_id": userId, "no_cache": noCache})
}

// GetFriendList
/**
 * @Description:
 * @receiver b
 * @return gjson.Result
 * example
 */
func (ctx *Context) GetFriendList() gjson.Result {
	return ctx.CallApi("get_friend_list", nil)
}

// GetGroupInfo
/**
 * @Description:
 * @receiver b
 * @param groupId
 * @param noCache
 * @return gjson.Result
 * example
 */
func (ctx *Context) GetGroupInfo(groupId int, noCache bool) gjson.Result {
	return ctx.CallApi("get_group_info", map[string]interface{}{"group_id": groupId, "no_cache": noCache})
}

// GetGroupList
/*
   @Description:
   @receiver b
   @return []GroupInfo
*/
func (ctx *Context) GetGroupList() gjson.Result {
	return ctx.CallApi("get_group_list", nil)
}

// GetGroupMemberInfo
/*
   @Description:
   @receiver b
   @param groupId int
   @param userId int
   @param noCache bool
   @return GroupMemberInfo
*/
func (ctx *Context) GetGroupMemberInfo(groupId int, userId int, noCache bool) gjson.Result {
	return ctx.CallApi("get_group_member_info", map[string]interface{}{"group_id": groupId, "user_id": userId, "no_cache": noCache})
}

// GetGroupMemberList
/*
   @Description:
   @receiver b
   @param groupId int
   @return []GroupMemberInfo
*/
func (ctx *Context) GetGroupMemberList(groupId int) gjson.Result {
	return ctx.CallApi("get_group_member_list", map[string]interface{}{"group_id": groupId})
}

// GetGroupHonorInfo
/*
   @Description:
   @receiver b
   @param groupId int
   @param honorType string
   @return GroupHonorInfo
*/
func (ctx *Context) GetGroupHonorInfo(groupId int, honorType string) gjson.Result {
	return ctx.CallApi("get_stranger_info", map[string]interface{}{"group_id": groupId, "honor_type": honorType})
}

// GetCookies
/*
   @Description:
   @receiver b
   @param domain string
   @return Cookie
*/
func (ctx *Context) GetCookies(domain string) gjson.Result {
	return ctx.CallApi("get_cookies", map[string]interface{}{"domain": domain})
}

// GetCsrfToken
/*
   @Description:
   @receiver b
   @return CsrfToken
*/
func (ctx *Context) GetCsrfToken() gjson.Result {
	return ctx.CallApi("get_csrf_token", nil)
}

// GetCredentials
/*
   @Description:
   @receiver b
   @param domain string
   @return Credentials
*/
func (ctx *Context) GetCredentials(domain string) gjson.Result {
	return ctx.CallApi("get_credentials", map[string]interface{}{"domain": domain})
}

// GetRecord
/*
   @Description:
   @receiver b
   @param file file
   @param outFormat string
   @return Record
*/
func (ctx *Context) GetRecord(file, outFormat string) gjson.Result {
	return ctx.CallApi("get_record", map[string]interface{}{"file": file, "out_format": outFormat})
}

// GetImage
/*
   @Description:
   @receiver b
   @param file string
   @return Image
*/
func (ctx *Context) GetImage(file string) gjson.Result {
	return ctx.CallApi("get_image", map[string]interface{}{"file": file})
}

// CanSendImage
/*
   @Description:
   @receiver b
   @return Bool
*/
func (ctx *Context) CanSendImage() bool {
	return ctx.CallApi("can_send_image", nil).Bool()
}

// CanSendRecord
/*
   @Description:
   @receiver b
   @return Bool
*/
func (ctx *Context) CanSendRecord() bool {
	return ctx.CallApi("can_send_record", nil).Bool()
}

// GetStatus
/*
   @Description:
   @receiver b
   @return OnlineStatus
*/
func (ctx *Context) GetStatus() gjson.Result {
	return ctx.CallApi("get_status", nil)
}

// SetRestart
/*
   @Description:
   @receiver b
   @param delay int
*/
func (ctx *Context) SetRestart(delay int) {
	ctx.CallApi("set_restart", map[string]interface{}{"delay": delay})
}

// CleanCache
/**
 * @Description:
 * @receiver b
 * example
 */
func (ctx *Context) CleanCache() {
	ctx.CallApi("clean_cache", nil)
}

//新增

// DownloadFile
/*
   @Description:
   @receiver b
   @param url string
   @param threadCount int
   @param headers []string
   @return DownloadFilePath
*/
func (ctx *Context) DownloadFile(url string, threadCount int, headers []string) gjson.Result {
	return ctx.CallApi("download_file", map[string]interface{}{
		"url":          url,
		"thread_count": threadCount,
		"headers":      headers})
}

// GetGroupMsgHistory
/*
   @Description:
   @receiver b
   @param messageSeq int64
   @param groupId int
   @return MessageHistory
*/
func (ctx *Context) GetGroupMsgHistory(messageSeq int64, groupId int) gjson.Result {
	return ctx.CallApi("get_group_msh_history", map[string]interface{}{"message_seq": messageSeq, "group_id": groupId})
}

// GetOnlineClients
/**
 * @Description:
 * @receiver b
 * @param noCache
 * @return gjson.Result
 * example
 */
func (ctx *Context) GetOnlineClients(noCache bool) gjson.Result {
	return ctx.CallApi("get_online_clients", map[string]interface{}{"no_cache": noCache})
}

// GetVipInfoTest
/*
   @Description:
   @receiver b
   @param UserId int
   @return VipInfo
*/
func (ctx *Context) GetVipInfoTest(userId int) gjson.Result {
	return ctx.CallApi("_get_vip_info", map[string]interface{}{"user_id": userId})
}

// SendGroupNotice
/*
   @Description:
   @receiver b
   @param groupId int
   @param content string
*/
func (ctx *Context) SendGroupNotice(groupId int, content string) {
	ctx.CallApi("send_group_notice", map[string]interface{}{"group_id": groupId, "content": content})
}

// ReloadEventFilter
/*
   @Description:
   @receiver b
*/
func (ctx *Context) ReloadEventFilter() {
	ctx.CallApi("reload_event_filter", nil)
}

// SetGroupNameSpecial
/*
   @Description:
   @receiver b
   @param groupId int
   @param groupName string
*/
func (ctx *Context) SetGroupNameSpecial(groupId int, groupName string) {
	ctx.CallApi("set_group_name", map[string]interface{}{"group_id": groupId, "group_name": groupName})
}

// SetGroupPortrait
/*
   @Description:
   @receiver b
   @param groupId int
   @param file string
   @param cache int
*/
func (ctx *Context) SetGroupPortrait(groupId int, file string, cache int) {
	ctx.CallApi("set_group+portrait", map[string]interface{}{"group_id": groupId, "file": file, "cache": cache})
}

// GetMsgSpecial
/*
   @Description:
   @receiver b
   @param messageId int
   @return MsgData
*/
func (ctx *Context) GetMsgSpecial(messageId int) gjson.Result {
	return ctx.CallApi("get_msg", map[string]interface{}{"message_id": messageId})
}

// GetForwardMsg
/*
   @Description:
   @receiver b
   @param messageId int
   @return []ForwardMsg
*/
func (ctx *Context) GetForwardMsg(messageId int) gjson.Result {
	return ctx.CallApi("get_forward_msg", map[string]interface{}{"message_id": messageId})
}

// SendGroupForwardMsg
/*
   @Description:
   @receiver b
   @param groupId int
   @param messages []Node
*/
func (ctx *Context) SendGroupForwardMsg(groupId int, messages interface{}) {
	ctx.CallApi("send_group_forward_msg", map[string]interface{}{"group_id": groupId, "message": messages})
}

// GetWordSlices
/*
   @Description:
   @receiver b
   @param content string
   @return []string
*/
func (ctx *Context) GetWordSlices(content string) gjson.Result {
	return ctx.CallApi(".get_word_slices", map[string]interface{}{"content": content})
}

// OcrImage
/*
   @Description:
   @receiver b
   @param image string
   @return OcrImage
*/
func (ctx *Context) OcrImage(image string) gjson.Result {
	return ctx.CallApi("ocr_image", map[string]interface{}{"image": image})
}

// GetGroupSystemMsg
/*
   @Description:
   @receiver b
   @return GroupSystemMsg
*/
func (ctx *Context) GetGroupSystemMsg() gjson.Result {
	return ctx.CallApi("get_group_system_msg", nil)
}

// GetGroupFileSystemInfo
/*
   @Description:
   @receiver b
   @param groupId int
   @return GroupFileSystemInfo
*/
func (ctx *Context) GetGroupFileSystemInfo(groupId int) gjson.Result {
	return ctx.CallApi("get_group_file_system_info", map[string]interface{}{"group_id": groupId})
}

// GetGroupRootFiles
/*
   @Description:
   @receiver b
   @param groupId int
   @return GroupRootFiles
*/
func (ctx *Context) GetGroupRootFiles(groupId int) gjson.Result {
	return ctx.CallApi("get_group_root_files", map[string]interface{}{"group_id": groupId})
}

// GetGroupFilesByFolder
/*
   @Description:
   @receiver b
   @param groupId int
   @param folderId string
   @return GroupFilesByFolder
*/
func (ctx *Context) GetGroupFilesByFolder(groupId int, folderId string) gjson.Result {
	return ctx.CallApi("get_group_files_by_folder", map[string]interface{}{"group_id": groupId, "folder_id": folderId})
}

// GetGroupFileUrl
/*
   @Description:
   @receiver b
   @param groupId int
   @param fileId string
   @param busid int
   @return FileUrl
*/
func (ctx *Context) GetGroupFileUrl(groupId int, fileId string, busid int) gjson.Result {
	return ctx.CallApi("get_group_file_url", map[string]interface{}{"group_id": groupId, "file_id": fileId, "busid": busid})
}

// GetGroupAtAllRemain
/*
   @Description:
   @receiver b
   @param groupId int
   @return GroupAtAllRemain
*/
func (ctx *Context) GetGroupAtAllRemain(groupId int) gjson.Result {
	return ctx.CallApi("get_group_at_all_remain", map[string]interface{}{"group_id": groupId})
}

//UploadGroupFile
/*
   @Description:
   @receiver b
   @param groupId int
   @param file string
   @param name string
   @param folder string
*/
func (ctx *Context) UploadGroupFile(groupID int, file string, name string, folder string) {
	ctx.CallApi("upload_group_file", map[string]interface{}{"group_id": groupID, "file": file, "name": name, "folder": folder})
}

func (ctx *Context) CallApi(action string, param interface{}) gjson.Result {
	return ctx.Bot.CallApi(action, param)
}

//SetEssenceMsg
/**
 * @Description:
 * @receiver ctx
 * @param messageId
 */
func (ctx *Context) SetEssenceMsg(messageId int) {
	ctx.CallApi("set_essence_msg", map[string]interface{}{"message_id": messageId})
}

//DeleteEssenceMsg
/**
 * @Description:
 * @receiver ctx
 * @param messageId
 */
func (ctx *Context) DeleteEssenceMsg(messageId int) {
	ctx.CallApi("delete_essence_msg", map[string]interface{}{"message_id": messageId})
}

//GetEssenceMsgList
/**
 * @Description:
 * @receiver ctx
 * @param groupId
 * @return gjson.Result
 */
func (ctx *Context) GetEssenceMsgList(groupId int) gjson.Result {
	return ctx.CallApi("get_essence_msg_list", map[string]interface{}{"group_id": groupId})
}

//CheckUrlSafely
/**
 * @Description:
 * @receiver ctx
 * @param url
 * @return int
 */
func (ctx *Context) CheckUrlSafely(url string) int {
	return int(ctx.CallApi("check_url_safely", map[string]interface{}{"url": url}).Int())
}