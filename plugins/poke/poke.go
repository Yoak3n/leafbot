package poke

import (
	"fmt"
	"github.com/3343780376/leafBot"
	"github.com/3343780376/leafBot/message"
	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/disk"
	"github.com/shirou/gopsutil/mem"
	"time"
)

func init() {
	leafBot.OnNotice(leafBot.NoticeTypeApi.Notify).
		AddRule(leafBot.OnlySuperUser).
		SetPluginName("poke").
		AddRule(
			func(event leafBot.Event, bot *leafBot.Bot) bool {
				if event.UserId == event.SelfId {
					return false
				}
				return true
			}).SetWeight(10).
		AddHandle(
			func(event leafBot.Event, bot *leafBot.Bot) {
				msg := fmt.Sprintf("服务器使用信息\n---------------\nCPU使用率：%v\n内存占有率：%v\n----------------", GetCpuPercent(), GetMemPercent())
				bot.Send(event, message.Text(msg))
			})
}

func GetCpuPercent() float64 {
	percent, _ := cpu.Percent(time.Second, false)
	return percent[0]
}

func GetMemPercent() float64 {
	memInfo, _ := mem.VirtualMemory()
	return memInfo.UsedPercent
}

func GetDiskPercent() map[string]float64 {
	var content = make(map[string]float64)
	parts, _ := disk.Partitions(true)
	for _, part := range parts {
		diskInfo, _ := disk.Usage(part.Mountpoint)
		content[part.Device] = diskInfo.UsedPercent
	}
	return content
}