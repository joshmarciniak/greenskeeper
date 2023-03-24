package com.jlmar.greenskeepercore.controller;

import com.jlmar.greenskeepercore.model.Account;
import com.jlmar.greenskeepercore.service.AccountService;
import io.swagger.annotations.ApiOperation;
import jakarta.annotation.Resource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/account")
public class AccountController {

    @Autowired
    AccountService accountService;

    @RequestMapping(value= "/createaccount", method = RequestMethod.POST)
    @ApiOperation(nickname = "createAccount", value = "Creates a user account", notes = "Creates a user account")
    public void createAccount(@RequestBody Account account) {
        accountService.createAccount(account);
    }
}
