import 'package:flutter/material.dart';

import '../home_screen.dart';

class MyAppBar extends StatelessWidget {
  const MyAppBar({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: double.infinity,
      height: kToolbarHeight,
      child: ValueListenableBuilder(
          valueListenable: MyHomeScreen.scrollBarIsAtTheTop,
          builder: (_, bool value, __) {
            return AppBar(
              title: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  const Text('MDI'),
                  SizedBox(
                    height: kToolbarHeight,
                    child: Row(
                      crossAxisAlignment: CrossAxisAlignment.stretch,
                      children: [
                        TextButton(
                          onPressed: () {},
                          style: TextButton.styleFrom(
                            primary: Colors.white,
                          ),
                          child: const Text('About Me'),
                        ),
                        TextButton(
                            onPressed: () {}, child: const Text('My Skills')),
                      ],
                    ),
                  )
                ],
              ),
              elevation: value ? 0 : Theme.of(context).appBarTheme.elevation,
              backgroundColor: value ? Colors.transparent : null,
            );
          }),
    );
  }
}
