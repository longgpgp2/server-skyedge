package SkyEdge.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import SkyEdge.model.Subscriber;
import SkyEdge.service.SubscriberService;

@Controller
public class SubscriberController {
    @Autowired
    private SubscriberService subscriberService;

    @GetMapping("/admin/subscriber")
    public String listSubscribers(Model model) {

        List<Subscriber> subscribers = subscriberService.getAllSubscribers();
        model.addAttribute("subscribers", subscribers);

        Long subscriberCount = subscriberService.getSubscriberCount();
        model.addAttribute("subscriberCount", subscriberCount);

        return "admin/subscriber/admin-subscriber";
    }

    @GetMapping("/admin/subscriber/delete")
    public String deleteSubscriber(@RequestParam int id) {
        if (subscriberService.findById(id).isPresent()) {
            Subscriber subscriber = subscriberService.findById(id).get();
            subscriberService.delete(subscriber);
        }
        return "redirect:/admin/subscriber";
    }

    @GetMapping("/admin/subscriber/search")
    public String searchSubscriber(@RequestParam("query") String query, Model model) {
        List<Subscriber> subscribers = subscriberService.findByEmailContainingIgnoreCase(query);
        model.addAttribute("subscribers", subscribers);

        Long subscriberCount = subscriberService.getSubscriberCount();
        model.addAttribute("subscriberCount", subscriberCount);

        return "admin/subscriber/admin-subscriber";
    }
}
