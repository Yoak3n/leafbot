package plugins

import (
	"github.com/3343780376/leafBot"
	"github.com/3343780376/leafBot/cqCode"
)

func UseSetuHandle() {
	leafBot.AddCommandHandle(func(event leafBot.Event, bot *leafBot.Bot, args []string) {
		if len(args) < 1 {
			bot.SendMsg(event.MessageType, event.UserId, event.GroupId, cqCode.Image("https://acg.toubiec.cn/random.php", map[string]interface{}{"cache": 0, "c": 3}), false)
		} else if args[0] == "r18" {
			bot.SendMsg(event.MessageType, event.UserId, event.GroupId, cqCode.Image("https://api.pixivweb.com/anime18r.php?return=img", map[string]interface{}{"cache": 0, "c": 3}), false)
		} else if args[0] == "true" {
			bot.SendMsg(event.MessageType, event.UserId, event.GroupId, cqCode.Image("https://api.pixivweb.com/api.php?return=img/json", map[string]interface{}{"cache": 0, "c": 3}), false)
		} else if args[0] == "r18+true" {
			bot.SendMsg(event.MessageType, event.UserId, event.GroupId, cqCode.Image("https://api.pixivweb.com/bw.php?return=img", map[string]interface{}{"cache": 0, "c": 3}), false)
		}
	}, "/setu", []string{"来点色图"}, nil, 10, false)
}
